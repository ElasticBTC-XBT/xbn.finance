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
    let blacklist = [
        '0x0df62d2cd80591798721ddc93001afe868c367ff', //VERA
        '0x547cbe0f0c25085e7015aa6939b28402eb0ccdac', //XBN
        '0xb0557906c617f0048a700758606f64b33d0c41a6', //Zepe
        '0x4827405d992d4d42f9ff4bb9d13ec9b616a75278', //xch5
        '0x119e2ad8f0c85c6f61afdf0df69693028cdc10be', //Zepe.io 
        '0x676bbd84bfc5a6c116f1e8e2c4ba9f8c5eee07e7', //EGRNH
        '0x68d1569d1a6968f194b4d93f8d0b416c123a599f', //AABEK
        '0x5558447b06867ffebd87dd63426d61c868c45904', //BNBW
        '0xd22202d23fe7de9e3dbe11a2a88f42f4cb9507cf', //BNBW
        '0x5190b01965b6e3d786706fd4a999978626c19880', //EVER
        '0xb16600C510b0f323dEE2cb212924D90e58864421', //FLUX)
        '0x17d1285bc68d9085f8e4b86fc565e452b29dc48f', //VELO
        '0x8ee3e98dcced9f5d3df5287272f0b2d301d97c57', // (AIR)
        '0x29ac3fe564ab44c7d58d7a54160568ace2db6de1', // (MNOP)
        '0xd6e796ee96e946045f034235196aa92037b6fef0', // (BSCA3D)
        '0xddf1d0f361ae9444020fcfa905acb4faff420bdd', // (PAYOU)
        '0xe8a3c70318e7480f74e614ee9dfa6043104328e4', // (CFL365)
        '0xdbe3e700ab26cbf3523d850b5d892fd17e0ce343', // (safemoon-dividend.com)
        '0xbc6675de91e3da8eac51293ecb87c359019621cf', // 
        '0x1882c296ebfa916a0ad194cfa0094c5e0086ba03', // IMM
        '0x15351604e617d9f645b53ee211d9c95ba88297df', // AAE
        '0x1e8f7bfdcf6d95eea81e039234624fa6b78bd389', // 
        '0x569b2cf0b745ef7fad04e8ae226251814b3395f9', // 
        '0x7d9c3bd1eb0b0a8921fab9c57e26e05518d87b4d', // 
        '0xa2295477a3433f1d06ba349cde9f89a8b24e7f8d', // 
        '0xc6c9d60d86b22c92ac1e524b3e56493ca58729dd', // 
        '0xc6dcda8677599d93de709c4f15bc4246fa156d97', // 
        '0xc7e16710cd9fbcd01e774284f5a8aba94ddac801', // 
        '0xcfddd9d611d65178168d365e77405341ce3aded9', // 
        '0xd1577805644caa8917a7545bc792f5f9ee16ea39', // 
        '0xd79f0732e5cbd04dba1e7476c6aedf083d58be01', // 
        '0xdd96535ae5e23365ad750951224a74d41990db71', // 
        '0xe0c707790d951e1f3065d1c0fb353de95351b56e', // 
        '0xf6a90d441f2b99ac89761713d6245461dd3495e2', // 
        '0x57dbae4b73455bc0d3e892ae57779160961f0f03', // 
        '0x5b11f275c4ecead38c634940ca923ff8c26a526f', // 
        '0x2a587076be8a3c90612914e081134e6348c5d60a', // 
        '0xe1b36f2ee8a34949ee834f4b63103ac27af38609', // 
        '0x03760b477913583beb81047aac3a0338d5e5264d', // 
        '0xb4677512501dd3246c3f7e0b5e51b912b1e17c56', // 
        '0xa450f77b42e0898b49de56ffc1ef4e5c25cf8810', // 
        '0x8ac0e0e1518b65c59df8904375f247928597e396', // 
        '0x8894ed0bda145aba84079171fa206809f58ac79d', // 
        '0x86b5ffdd3f894ad14142aefffb8702bd42b2594d', // 
        '0x481102499d8ec38cc6bd6bfd155bc4a157a85a60', // 
        '0x3ad8a7b468526414d8acbc77323a7bc644c00348', // 
        '0x42368414cdcbf0a2e5f8cc027614b5b142cb9f59', // 
        '0x03fa721747cb1794c0c57c54f5efa2b0550db7c0', // 
        '0x583779c799edf804777182a37ef059059cddb543', // 
        '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454', // 
        '0x380624a4a7e69db1ca07deecf764025fc224d056', // 
        '0x53e562b9b7e5e94b81f10e96ee70ad06df3d2657', // 
        '0x94f559ae621f1c810f31a6a620ad7376776fe09e', // 
        '0x96058f8c3e16576d9bd68766f3836d9a33158f89', // 
        '0xe9e7cea3dedca5984780bafc599bd69add087d56', // 
        '0xf3822314b333cbd7a36753b77589afbe095df1ba', // 
        '0x7a2a598ca9ec727ac01ee26c6b5a8e344fe1d8ed', // 
        '0x65eebc923b4e9d1f5c45a6a5b002cdbfe3ca6aba', // 
        '0x079830c2c6fb3b75ae2abe96e3ef60706756bb7b', // 
        '0xa9b311d971aa7f43e09b07b37a7175f47ce133d9', // 
        '0x373233a38ae21cf0c4f9de11570e7d5aa6824a1e', // 
    ];
    blacklist = blacklist.map(name => name.toLowerCase());

    let blacklist_names = ['Cake-LP']
    blacklist_names = blacklist_names.map(name => name.toLowerCase());

    // debugger;

    for (let i = 0; i < _items.length; i++) {
        let token = _items[i];
        if (blacklist.includes(token['contract_address'].toLowerCase()) == false 
            && blacklist_names.includes(token['contract_ticker_symbol'].toLowerCase()) == false
            && token.balance > 0.01
            && token.balance != 20007679000000000000000000
            ) {

            // console.info(token.balance);
            if (token.balance > 0) {    

                token['XBNValue']= await getTokenConversionValue(web3Client, token.contract_address, token.balance);
                token['XBNValueUSD']= ((XBNPrice) * (token['XBNValue']/10**18)).toFixed(2);
            } else {
                token['XBNValue']= 0;
                token['XBNValueUSD']= 0;
            }
            items.push(token);
        }
        
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
