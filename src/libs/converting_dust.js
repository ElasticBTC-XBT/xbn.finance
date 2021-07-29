import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'
// import { all } from 'core-js/fn/promise';
import BigNumber from "bignumber.js";

const PancakeV2_FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
const PancakeV2_ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5';

export const Token = {
    
    jsonInterface: require('@/assets/contracts/XBN.json') // same interface
}
export const pancakeRouter = {
    address: PancakeV2_ROUTER_ADDRESS,
    
    jsonInterface: require('@/assets/contracts/pancakeRouter.json')
}

export const convertingDust = {
    address: process.env.VUE_APP_CONVERTING_DUST_ADDRESS,
    
    jsonInterface: require('@/assets/contracts/convertingDust.json')
}

export const getConvertingDustContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        convertingDust.jsonInterface,
        convertingDust.address,
        {
            gas: 370000,
            from: accounts[0]
        }
    );
}


export const getPancakeRouterContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        pancakeRouter.jsonInterface,
        pancakeRouter.address,
        {
            gas: 370000,
            from: accounts[0]
        }
    );
}


export const getXBNPrice = async (web3Client) => {

    const contract = await getPancakeRouterContract(web3Client);

    const rate =  await contract.methods.getAmountsOut(1000, ['0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC','0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56']).call();
    return rate[1]/1000;
}

export const getTokensBalance = async (web3Client) => {
    // debugger;
    if (web3Client.eth == undefined) {
        // eslint-disable-next-line no-console
        console.debug("web3Client.eth is undefined");
        return [];
    }
    const accounts = await web3Client.eth.getAccounts();

    const XBNPrice = await getXBNPrice(web3Client);

    const url = `https://api.covalenthq.com/v1/56/address/${accounts[0]}/balances_v2/?&key=ckey_4823a546b1a14995b9d23248124`;
    const response = await fetch(url);
    const data = await response.json();

    let _items = data['data']['items'];
    let items = [];

    // debugger;

    for (let i = 0; i < _items.length; i++) {
        let token = _items[i];
        // debugger;
        if (token.balance > 0) {    

            token['XBNValue']= await getTokenConversionValue(web3Client, token.contract_address, token.balance);
            token['XBNValueUSD']= ((XBNPrice) * (token['XBNValue']/10**18)).toFixed(2);
        } else {
            token['XBNValue']= 0;
            token['XBNValueUSD']= 0;
        }
        items.push(token);
        
    }
    // console.log(items);
    return items; 

}




export const getTokenConversionValue = async (web3Client, token, amount) => {
    // const accounts = await web3Client.eth.getAccounts();
    const contract = await getConvertingDustContract(web3Client);
    const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';


    const pair = getCreate2Address(
        PancakeV2_FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [token, WBNB])]),
        INIT_CODE_HASH
    )

    // const path = ['0xac109C8025F272414fd9e2faA805a583708A017f','0x9A0Cf2F3B8F8643F5CC694AfeF7CaF636CCBF209'];
    // const path = [pair,'0x9A0Cf2F3B8F8643F5CC694AfeF7CaF636CCBF209'];
    const path = [pair,'0xB43C3e13b548fdC95a82A293669D2C62e84ddE53'];
    // console.log(`path: ${path}`);
    try {
        return await contract.methods.FivePub(amount, token,path).call();
    } catch (e) {
        return 0
    }
    
}
const GasLimit = 500000
export const getTokenContract = async(web3Client,token_address) => {
    const accounts = await web3Client.eth.getAccounts()
    return new web3Client.eth.Contract(
      Token.jsonInterface.abi,
      token_address,
      {
        gas: GasLimit,
        from: accounts[0]
      }
    )
  }

export const getTokenAllowance = async(web3Client, address, token_address) => {
    const contract = await getTokenContract(web3Client, token_address)
    return await contract.methods.allowance(address, convertingDust.address).call()
  }

export const convertToken = async (web3Client, token, amount) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getConvertingDustContract(web3Client);
    const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';


    const allowance = await getTokenAllowance(web3Client, accounts[0],token)
    // debugger;
    if (BigInt(allowance) < BigInt(amount)) {

        
        // amount = 
        // console.info(`approve ${amount}`)
        const tokenContract = await getTokenContract(web3Client,token)
        // debugger
        await tokenContract.methods.approve( convertingDust.address, amount + "00" ).send({
            gas: 100000
        })
    }


    const pair = getCreate2Address(
        PancakeV2_FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [token, WBNB])]),
        INIT_CODE_HASH
    )

    // const path = ['0xac109C8025F272414fd9e2faA805a583708A017f','0x9A0Cf2F3B8F8643F5CC694AfeF7CaF636CCBF209'];
    const path = [pair,'0xB43C3e13b548fdC95a82A293669D2C62e84ddE53'];
    // console.log(`path: ${path}`);
    try {
        return await contract.methods.Five(amount, token,path,0).send();    
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return 0
    }
    
}
