export const Staking = {
    address: process.env.VUE_APP_STAKING_ADDRESS,
    // jsonInterface: require('@/assets/contracts/AirdropLander.json')
    jsonInterface: require('@/assets/contracts/Staking.json')
}

export const getStakingContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        Staking.jsonInterface,
        Staking.address,
        {
            gas: 370000,
            from: accounts[0]
        }
    );
}


export const claimXBNContract = async (web3Client, userBalance) => {
    const contract = await getStakingContract(web3Client);


    if (userBalance <=1000){

        await contract.methods.claimXBNReward().send();
    } else {
        let value = 0.003;
        await contract.methods.claimXBNReward().send({
            value: web3Client.utils.toWei(value.toString(), 'ether')
        });
    }



}

export const claimBUSDContract = async (web3Client) => {
    const contract = await getStakingContract(web3Client);

    const value = 0.007;

    await contract.methods.claimBUSDReward().send({
        value: web3Client.utils.toWei(value.toString(), 'ether')
    });
}
//
// export const adjustParams = async (web3Client) => {
//     const contract = await getStakingContract(web3Client);
//     await contract.methods.setClaimableAmount(888).send();
//     await contract.methods.setNextPeriodWaitTime(60 * 60 * 24).send();
// }

export const getUserStakeData = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getStakingContract(web3Client);
    const reward = await contract.methods.calculateReward(accounts[0]).call();
    const nextClaimTime = await contract.methods.getNextClaimTime(accounts[0]).call();
    const currentPool = await contract.methods.currentPool().call();
    const decimals = 18;
    return {
        reward: Math.round(reward/(10 ** decimals) * 1000)/1000,
        nextClaimTime: nextClaimTime,
        currentPool: Math.round(currentPool/(10 ** decimals) * 100)/100,
    };
}
