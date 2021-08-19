export const AirdropLander = {
    address: process.env.VUE_APP_AIRDROPV2_CONTRACT_ADDRESS || '0xA60Fb437b969c7E2d8c5927b9dCFE9A3cB597B5B',
    // jsonInterface: require('@/assets/contracts/AirdropLander.json')
    jsonInterface: require('@/assets/contracts/XDrop.json')
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
let GasLimit = 370000;

export const claimAirdrop = async (web3Client, address, amount, ref) => {
    const contract = await getAirdropContract(web3Client);

    // const value = (Math.floor(Math.random() * Math.floor(12)) + 5) / 1000;
    let _gasLimit = await contract.methods.distributeTokens(address,ref).estimateGas({gas: GasLimit*10});

    await contract.methods.distributeTokens(address,ref).send({
        value: web3Client.utils.toWei(amount.toString(), 'ether'),
        gas: _gasLimit * 1.2 | 0
    });
}

// export const adjustParams = async (web3Client) => {
//     const contract = await getAirdropContract(web3Client);
//     await contract.methods.setClaimableAmount(888).send();
//     await contract.methods.setNextPeriodWaitTime(60 * 60 * 24).send();
// }

export const getReturnAmount = async (web3Client, tokenAddress='0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC', amount) => {
    // const accounts = await web3Client.eth.getAccounts();

    amount = web3Client.utils.toWei(amount.toString(), 'ether')
    const contract = await getAirdropContract(web3Client);
    const result = await contract.methods.getReturnAmount(amount,tokenAddress).call();
    return result;
}
