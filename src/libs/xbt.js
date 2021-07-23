import {AirdropLander} from "@/libs/xbt-airdrop";

export const XBN = {
    address: process.env.VUE_APP_XBN_CONTRACT_ADDRESS,
    jsonInterface: require('@/assets/contracts/XBN.json')
}


// export const Staking = {
//     address: process.env.VUE_APP_XBN_CONTRACT_ADDRESS,
//     jsonInterface: require('@/assets/contracts/Staking.json')
// }

export const getXBNContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        XBN.jsonInterface.abi,
        XBN.address,
        {
            gas: 500000,
            from: accounts[0]
        }
    );
}


// export const getStakingContract = async (web3Client) => {
//     const accounts = await web3Client.eth.getAccounts();
//     return new web3Client.eth.Contract(
//         XBN.jsonInterface.abi,
//         XBN.address,
//         {
//             gas: 500000,
//             from: accounts[0]
//         }
//     );
// }


export const getContractXBNFundBalance = async (web3Client) => {
    const contract = await getXBNContract(web3Client);
    const balance = await contract.methods.balanceOf(AirdropLander.address).call();
    const decimals = await contract.methods.decimals().call();
    return balance / (10 ** decimals);
};

export const getXBNBalance = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getXBNContract(web3Client);
    const balance = await contract.methods.balanceOf(accounts[0]).call();
    const decimals = await contract.methods.decimals().call();
    return balance / (10 ** decimals);
}
