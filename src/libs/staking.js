import { getPancakeRouterContract } from './converting_dust';

export const Staking = {
    address: process.env.VUE_APP_STAKING_ADDRESS,
    // jsonInterface: require('@/assets/contracts/AirdropLander.json')
    jsonInterface: require('@/assets/contracts/Staking.json')
}
let GasLimit = 370000;
export const getStakingContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        Staking.jsonInterface,
        Staking.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}

export const getBNBTax = async(web3Client) => {
    const contract = await getStakingContract(web3Client);
    const accounts = await web3Client.eth.getAccounts();
    const reward = await contract.methods.calculateReward(accounts[0]).call();

    const pancakeContract = await getPancakeRouterContract(web3Client);

    const rate =  await pancakeContract.methods.getAmountsOut(reward, ['0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC','0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c']).call();
    return rate[1];
}

export const claimXBNContract = async (web3Client, userBalance) => {
    const contract = await getStakingContract(web3Client);

    //console.log("#35");

    let value = await getBNBTax(web3Client);
    value = value/10;
    let baseTax = 0.003 * 10**18;
    if ( value < baseTax ) {
        value = baseTax;
    }

    let _gasLimit = GasLimit;
    try {
        _gasLimit = await contract.methods.claimXBNReward( )
                        .estimateGas({value: value,
                                        gas: GasLimit*10});
    } catch(error){
        
        // eslint-disable-next-line no-console
        console.error(error);
    }
    

    // console.info(`claimXBNReward gas limit: ${_gasLimit}`);                                        

    //console.log("#58");
    if (userBalance <=1000){
        
        await contract.methods.claimXBNReward().send({gas: _gasLimit * 2.5 | 0});
    } else {


        // console.log("#63");
        const accounts = await web3Client.eth.getAccounts();    
        // console.log(`#67 ${accounts[0]}`);
        const userBNBBalance = await web3Client.eth.getBalance(accounts[0]);
        //console.log("#65");
        if (userBNBBalance < value) {
            alert('Your BNB balance is not enough to pay fee, please add more BNB');
            return false;
        } else {
            await contract.methods.claimXBNReward().send({
                value: value, 
                gas: _gasLimit * 2.5 | 0
                
            });
        }

        
    }

    return true;

}

export const claimBUSDContract = async (web3Client) => {
    const contract = await getStakingContract(web3Client);

    let value = await getBNBTax(web3Client);
    value = value/7;
    let baseTax = 0.01 * 10**18;
    if ( value < baseTax ) {
        value = baseTax;
    }

    let _gasLimit = GasLimit;
    
    try {
        _gasLimit = await contract.methods.claimBUSDReward()
                    .estimateGas({value: value, gas: GasLimit*10});
    } catch(err){
        // eslint-disable-next-line no-console
        console.error(err);
    }
    
    // console.log("#63");
    const accounts = await web3Client.eth.getAccounts();    
    // console.log(`#67 ${accounts[0]}`);
    const userBNBBalance = await web3Client.eth.getBalance(accounts[0]);
    //console.log("#65");
    if (userBNBBalance < value) {
        alert('Your BNB balance is not enough to pay fee, please add more BNB');
        return false;
    } else {
            
        await contract.methods.claimBUSDReward().send({
            value: value,
            gas: _gasLimit * 2.5 | 0
        });
    }

    return true;
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
