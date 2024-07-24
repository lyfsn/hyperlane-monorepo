import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'hardhat-ignore-warnings';
import 'solidity-coverage';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.19',
    settings: {
      optimizer: {
        enabled: true,
        runs: 999_999,
      },
    },
  },
  networks: {
    mainnet: {
      url: 'https://endurance2-rpc-partner.archivenode.club/',
      accounts: [
        '39725efee3fb28614de3bacaffe4cc4bd8c436257e2c8bb887c4b5c4be45e76d'
      ],
      chainId: 648
    },
  },
  etherscan: {
    apiKey: {
      mainnet: 'a',
    },
    customChains: [
      {
        network: 'mainnet',
        chainId: 648,
        urls: {
          apiURL: 'https://explorer-endurance.fusionist.io/api',
          browserURL: 'https://explorer-endurance.fusionist.io/'
        }
      }
    ]
  },
  gasReporter: {
    currency: 'USD',
  },
  typechain: {
    outDir: './types',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
    node16Modules: true,
  },
  mocha: {
    bail: true,
    import: 'tsx',
  },
  warnings: {
    // turn off all warnings for libs:
    'fx-portal/**/*': {
      default: 'off',
    },
  },
};
