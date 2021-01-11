import {getXBTContract} from "@/libs/xbt";

export const MysticDealer = {
    address: process.env.VUE_APP_XBT_MYSTIC_DEALER_ADDRESS,
    jsonInterface: require('@/assets/contracts/MysticDealer.json')
}

export const getDealerContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        MysticDealer.jsonInterface.abi,
        MysticDealer.address,
        {
            gas: 240000,
            from: accounts[0]
        }
    );
}

export const getSaleSupply = async (web3Client) => {
    const contract = await getXBTContract(web3Client);

    const balance = await contract.methods.balanceOf(MysticDealer.address).call();
    const decimals = await contract.methods.decimals().call();

    return balance / (10 ** decimals);
};

export const getSaleRate = async (web3Client) => {
    const xbtContract = await getXBTContract(web3Client);
    const dealerContract = await getDealerContract(web3Client);

    const decimals = await xbtContract.methods.decimals().call();
    const saleRate = await dealerContract.methods.getSaleRate().call();

    return saleRate / (10 ** decimals);
}

export const makeBid = async (web3Client, bidRate) => {
    const dealerContract = await getDealerContract(web3Client);
    await dealerContract.methods.exchangeTokens().send({
        gas: 240000,
        value: web3Client.eth.toWei(bidRate)
    });
}

export const calculateExchangeAmount = (bidRate, exchangeRate) => {
    return (bidRate * exchangeRate);
}
