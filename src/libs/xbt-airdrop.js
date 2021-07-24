export const AirdropLander = {
    address: process.env.VUE_APP_AIRDROP_CONTRACT_ADDRESS,
    // jsonInterface: require('@/assets/contracts/AirdropLander.json')
    jsonInterface: require('@/assets/contracts/AirdropLanderV2.json')
}

export const getAirdropContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        AirdropLander.jsonInterface.abi,
        AirdropLander.address,
        {
            gas: 370000,
            from: accounts[0]
        }
    );
}


export const claimAirdrop = async (web3Client) => {
    const contract = await getAirdropContract(web3Client);

    const value = (Math.floor(Math.random() * Math.floor(12)) + 5) / 1000;

    await contract.methods.distributeTokens().send({
        value: web3Client.utils.toWei(value.toString(), 'ether')
    });
}

export const adjustParams = async (web3Client) => {
    const contract = await getAirdropContract(web3Client);
    await contract.methods.setClaimableAmount(888).send();
    await contract.methods.setNextPeriodWaitTime(60 * 60 * 24).send();
}

export const getParticipantStatus = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getAirdropContract(web3Client);
    const result = await contract.methods.participantWaitTimeOf(accounts[0]).call();
    return {participantStatus: result};
}
