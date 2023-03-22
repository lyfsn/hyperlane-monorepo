use std::fmt::Debug;
use std::time::Duration;

use ethers::abi::Detokenize;
use ethers::prelude::{NameOrAddress, TransactionReceipt};
use ethers_contract::builders::ContractCall;
use tracing::{error, info, instrument};

use hyperlane_core::utils::fmt_bytes;
use hyperlane_core::{ChainCommunicationError, ChainResult, H256};

use crate::Middleware;

/// Dispatches a transaction, logs the tx id, and returns the result
#[instrument(err, ret)]
pub(crate) async fn report_tx<M, D: Debug>(tx: ContractCall<M, D>) -> ChainResult<TransactionReceipt>
where
    M: Middleware + 'static,
    D: Detokenize,
{
    let data = tx
        .tx
        .data()
        .map(|b| fmt_bytes(b))
        .unwrap_or_else(|| "None".into());

    let to = tx
        .tx
        .to()
        .cloned()
        .unwrap_or_else(|| NameOrAddress::Address(Default::default()));

    info!(?to, %data, "Dispatching transaction");
    // We can set the gas higher here!
    let dispatch_fut = tx.send();
    let dispatched = dispatch_fut.await?;

    let tx_hash: H256 = *dispatched;

    info!(?to, %data, ?tx_hash, "Dispatched tx");

    match tokio::time::timeout(Duration::from_secs(300), dispatched).await {
        // all good
        Ok(Ok(Some(receipt))) => {
            info!(?tx_hash, "confirmed transaction");

            Ok(receipt)
        }
        // ethers-rs will return None if it can no longer poll for the tx in the mempool
        Ok(Ok(None)) => Err(ChainCommunicationError::TransactionDropped(tx_hash)),
        // Received error, pass it through
        Ok(Err(x)) => {
            error!(?tx_hash, error = ?x, "encountered error when waiting for receipt");
            Err(x.into())
        }
        // Timed out
        Err(x) => {
            error!(?tx_hash, error = ?x, "waiting for receipt timed out");
            Err(ChainCommunicationError::TransactionTimeout())
        }
    }
}
