import {getXBNContract} from "@/libs/xbt";

export const MysticDealer = {

    address: process.env.VUE_APP_MYSTIC_DEALER_ADDRESS,
    jsonInterface: require('@/assets/contracts/Reseller.json')
}
export const PancakeRouter = {
    address: "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
    jsonInterface: require('@/assets/contracts/Router.json')
}

const GasLimit = 1000000;

export const getDealerContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();

    return new web3Client.eth.Contract(
        MysticDealer.jsonInterface.abi,
        MysticDealer.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}


export const getRouterContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        PancakeRouter.jsonInterface.abi,
        PancakeRouter.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}

export const getSaleSupply = async (web3Client) => {
    const contract = await getXBNContract(web3Client);

    const balance = await contract.methods.balanceOf(MysticDealer.address).call();
    const decimals = await contract.methods.decimals().call();

    return balance / (10 ** decimals);
};

export const getSaleRule = async (web3Client) => {
    // const xbtContract = await getXBNContract(web3Client);
    const dealerContract = await getRouterContract(web3Client);

    // const decimals = await xbtContract.methods.decimals().call();
    const saleRate = await dealerContract.methods.getAmountsOut(1,['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c','0x547cbe0f0c25085e7015aa6939b28402eb0ccdac']).call();
    return Number(saleRate[1])*1.02; //2% discount
};


export const getOrderMetaOf = async (web3Client, account) => {
    const dealerContract = await getDealerContract(web3Client);

    const [participantWaitTime] = await dealerContract.methods.getOrderMetaOf(account).call();

    return {
        participantWaitTime: Number(participantWaitTime) * 1000
    };
}

export const makeBid = async (web3Client, bidRate, reseller) => {
    const dealerContract = await getDealerContract(web3Client);
    await dealerContract.methods.distributeTokens(reseller).send({
        gas: GasLimit,
        value: web3Client.utils.toWei(bidRate.toString())
    });
}

export const withdrawFund = async (web3Client) => {
    const dealerContract = await getDealerContract(web3Client);
    await dealerContract.methods.withdrawFund().send({
        gas: GasLimit,
    });
}

export const adjustSaleRule = async (web3Client) => {
    const dealerContract = await getDealerContract(web3Client);
    await dealerContract.methods.setQuantityRules(
        web3Client.utils.toWei('1117', 'ether'),
        web3Client.utils.toWei('0.003', 'ether'),
        web3Client.utils.toWei('100', 'ether'),
    ).send({
        gas: GasLimit,
    });
}

const subscribeEventChange = async (web3Client, eventName, callback) => {
    const dealerContract = await getDealerContract(web3Client);

    const eventJsonInterface = web3Client.utils._.find(
        dealerContract._jsonInterface,
        o => o.name === eventName && o.type === 'event',
    );

    const subscription = web3Client.eth.subscribe('logs', {
        address: MysticDealer.address,
        topics: [eventJsonInterface.signature]
    }, function (error, result) {
        const eventObj = web3Client.eth.abi.decodeLog(
            eventJsonInterface.inputs,
            result.data,
            result.topics.slice(1)
        );

        if (typeof callback === "function") callback(eventObj);
    });

    return () => subscription.unsubscribe();
}

export const subscribeOrderBookChange = (web3Client, callback) => {
    return subscribeEventChange(web3Client, 'OnSuccessfulSale', callback);
}
