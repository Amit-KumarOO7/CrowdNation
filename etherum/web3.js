import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
//const HDWalletProvider = require('truffle-hdwallet-provider');
var provider;
const run = async () => {

    provider = await detectEthereumProvider();
}
run();
// const provider = new HDWalletProvider(
// 	'knee february humble enjoy napkin brother smart tilt viable banner series desert',
// 	'HTTP://127.0.0.1:7545'
// );

// const web3 = new Web3(window.web3.currentProvider);
// if (provider) {
//     // From now on, this should always be true:
//     // provider === window.ethereum
//     startApp(provider); // initialize your app
//   } else {
//     console.log('Please install MetaMask!');
//   }

const web3 = new Web3(provider);

export default web3;
