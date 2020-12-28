/* eslint-disable */
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

let web3Client = null;
let web3Provider = null;

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            infuraId: process.env.VUE_APP_INFURA_ID || '07b667eff25947b7bb9fce9bde73efda' // required
        }
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});

const bindingProviderEvents = (provider) => {
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        console.log('accountsChanged', accounts);
        window.location.reload()
    });

    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        console.log('chainChanged', chainId);
        window.location.reload()
    });

    // Subscribe to provider connection
    provider.on("connect", ({chainId}) => {
        console.log('connect', {chainId});
        window.location.reload()
    });

    // Subscribe to provider disconnection
    provider.on("disconnect", ({ code, message }) => {
        console.log('disconnect', { code, message });
        window.location.reload()
    });
}

export const getWeb3Client = async () => {
    console.log('get client');

    if(!web3Provider) {
        web3Provider = await web3Modal.connect();
    }

    if(web3Provider) bindingProviderEvents(web3Provider);

    if(!web3Client) web3Client = new Web3(web3Provider);

    return {web3Client, web3Provider};
}

