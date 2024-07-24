

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  --constructor-args $(cast abi-encode "constructor(uint32)" 648) \
  0x2f2aFaE1139Ce54feFC03593FeE8AB2aDF4a85A7 \
  ./contracts/upgrade/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy \
  --watch \
  --show-standard-json-input

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  --constructor-args $(cast abi-encode "constructor(uint32)" 648) \
  0x4Ed7d626f1E96cD1C0401607Bf70D95243E3dEd1 \
  ./contracts/Mailbox.sol:Mailbox \
  --watch \
  --show-standard-json-input

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  0xC831271c1fB212012811a91Dd43e5926C1020563 \
  ./contracts/hooks/MerkleTreeHook.sol:MerkleTreeHook \
  --watch \
  --show-standard-json-input > output/merkleTreeHook.json

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  0x1052eF3419f26Bec74Ed7CEf4a4FA6812Bc09908 \
  ./contracts/isms/routing/DomainRoutingIsmFactory.sol:AbstractDomainRoutingIsmFactory \
  --watch \
  --show-standard-json-input > output/AbstractDomainRoutingIsmFactory.json

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  --constructor-args $(cast abi-encode "constructor(uint32)" 648) \
  0xB30EAB08aa87138D57168D0e236850A530f49921 \
  ./contracts/upgrade/TransparentUpgradeableProxy.sol:TransparentUpgradeableProxy \
  --watch \
  --show-standard-json-input > output/interchainGasPaymaster_proxy.json

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  --constructor-args $(cast abi-encode "constructor(uint32)" 648) \
  0x5366362c41e34869BDa231061603E4356D66079D \
  ./contracts/hooks/igp/InterchainGasPaymaster.sol:InterchainGasPaymaster \
  --watch \
  --show-standard-json-input > output/InterchainGasPaymaster_impl.json


forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  --skip-is-verified-check \
  --compiler-version v0.8.19+commit.7dd6d404 \
  0xaE7BCf37D4541d3CFc46c1459829c1246E11aE08 \
  ./contracts/hooks/PausableHook.sol:PausableHook \
  --watch \
  --show-standard-json-input > output/PausableHook.json
  

------ 

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6 \
  ./contracts/isms/aggregation/StaticAggregationIsmFactory.sol:StaticAggregationIsmFactory \
  --watch \
  --show-standard-json-input > output/StaticAggregationIsmFactory.json

forge verify-contract \
  --chain-id 648 \
  --verifier blockscout \
  --verifier-url https://explorer-endurance.fusionist.io/api \
  0xEb9FcFDC9EfDC17c1EC5E1dc085B98485da213D6 \
  ./contracts/isms/aggregation/StaticAggregationIsm.sol:StaticAggregationIsm \
  --watch \
  --show-standard-json-input > output/StaticAggregationIsm.json

----
