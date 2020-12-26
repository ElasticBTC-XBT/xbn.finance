export const XBT = {
    address: process.env.VUE_APP_XBT_CONTRACT_ADDRESS,
    jsonInterface: require('@/assets/contracts/XBT.json')
}

export const getXBTContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        XBT.jsonInterface.abi,
        XBT.address,
        {
            gas: 300000,
            from: accounts[0]
        }
    );
}


export const getXBTBalance = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getXBTContract(web3Client);
    const balance = await contract.methods.balanceOf(accounts[0]).call();
    const decimals = await contract.methods.decimals().call();
    return balance / (10 ** decimals);
}
