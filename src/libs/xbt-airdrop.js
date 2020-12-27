export const AirdropLander = {
    address: process.env.VUE_APP_AIRDROP_CONTRACT_ADDRESS,
    jsonInterface: require('@/assets/contracts/AirdropLander.json')
}

export const getAirdropContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        AirdropLander.jsonInterface.abi,
        AirdropLander.address,
        {
            gas: 300000,
            from: accounts[0]
        }
    );
}


export const claimAirdrop = async (web3Client) => {
    const contract = await getAirdropContract(web3Client);
    await contract.methods.requestTokens().send();
}

export const getParticipantStatus = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getAirdropContract(web3Client);
    const result = await contract.methods.participantWaitTimeOf(accounts[0]).call();
    return {participantStatus: result};
}
