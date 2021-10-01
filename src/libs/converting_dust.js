import { pack, keccak256 } from '@ethersproject/solidity'
import { getCreate2Address } from '@ethersproject/address'
// import { all } from 'core-js/fn/promise';
import BigNumber from "bignumber.js";
import {getXBNContract} from "@/libs/xbt";
const PancakeV2_FACTORY_ADDRESS = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
const PancakeV2_ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5';
const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
export const Token = {
    
    jsonInterface: require('@/assets/contracts/XBN.json') // same interface
}
export const pancakeRouter = {
    address: PancakeV2_ROUTER_ADDRESS,
    
    jsonInterface: require('@/assets/contracts/pancakeRouter.json')
}

export const convertingDust = {
    address: process.env.VUE_APP_CONVERTING_DUST_ADDRESS || '0x77C6BB15eac53C710964b19911A59DA473412847',
    
    jsonInterface: require('@/assets/contracts/Migration.json')
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

export const getMigrationStatus = async (web3Client) => {
    const contract = await getConvertingDustContract(web3Client);
    const accounts = await web3Client.eth.getAccounts();
    const bonus = await contract.methods.getBonus(accounts[0]).call();
    const next_claim = await contract.methods.nextClaimTime(accounts[0]).call();
    
    const XBNcontract = await getXBNContract(web3Client);
    const vault = await XBNcontract.methods.balanceOf(convertingDust.address).call();
    return {
        'bonus': Math.round(bonus* 100/10**18)/100,
        'vault': Math.round(vault* 100/10**18)/100,
        'next_claim':next_claim
    };
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
        '0x80226eb0c3558ca46016eb7e8cd4ca407f504f45', // 
        '0xab57aef3601cad382aa499a6ae2018a69aad9cf0', // 
        '0xfaa6c12cdeb3a63085fd78644756566c69778c53', // 
        '0xf9f89ef3c1b96a662db5fc9184dbf6ca1416dfe5', // 
        '0xf30806fe0df6623dbcfe9dbcaaae80a1cd1c505f', // 
        '0xd8a1734945b9ba38eb19a291b475e31f49e59877', // 
        '0xd65a96fca4153fdc58ca906fb26506451c22ddb7', // 
        '0xd1f6b396bb8b4d780ac7e5e0a38e5fb284510567', // 
        '0xd08f276fc324a7e9b3b51bfc7da1bbca6144f180', // 
        '0xcf8e1d4567aba28ef679333efe70a8c90d1c9ee0', // 
        '0xc7ef1bff46cd025509cf5e55fa5cd5c14793cbff', // 
        '0xc1ed07a64f69ba3658e227a76d962218519c147a', // 
        '0xbda8d53fe0f164915b46cd2ecffd94254b6086a2', // 
        '0x89e0262ec34311564b4e43d416218d38d4db879c', // 
        '0x53766d3b2fe0e8ded2c8d9d89d964a1f34e43481', // 
        '0xb8a9704d48c3e3817cc17bc6d350b00d7caaecf6', // 
        '0x7b9c3df47f3326fbc0674d51dc3eb0f2df29f37f', // 
        '0xfc8e68e30350c6603d3d29fcc8e676380c28fcf4', // 
        '0xca3f508b8e4dd382ee878a314789373d80a5190a', // 
        '0xdec858d5ee93568ce4ea5bbf9169cea23d2de305', // 
        '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51', // 
        '0x72b7d61e8fc8cf971960dd9cfa59b8c829d91991', // 
        '0x8cd8e11dd8220bfc0af6cee01d823f568a37e810', // 
        '0x461f6c9ae13a7dac7055c73fbf8dab529d667041', // 
        '0x64b783a80d0c05bed0e2f1a638465a7ba3f4a6fb', // 
        '0x3c037c4c2296f280bb318d725d0b454b76c199b9', // 
        '0x22a0278ea7ba0c0248e463019437b3f32ca46da2', // 
        '0x44654ac902aba59ae7daa9a658a7c1c6ea4ec46f', // 
        '0x7aecb24d2943115b136d953aafd84e82c9c766ca', // 
        '0xde50aae358015c13ce6f24418deebda269752a6b', // 
        '0x8eab2b8b6827a9a80d85728457bce7cbd84fd4f8', // 
        '0xde50aae358015c13ce6f24418deebda269752a6b', // 
        '0xd9c2d319cd7e6177336b0a9c93c21cb48d84fb54', // 
        '0xcd40f2670cf58720b694968698a5514e924f742d', // 
        '0x2b15bc62d1fb46ade4763a3c5ea0917460bb25f1', // 
        '0x3a50d6daacc82f17a2434184fe904fc45542a734', // 
        '0x1f5541b16d33057a74fc4a36a6b5853f7094ca2a', // 
        '0xc33fc11b55465045b3f1684bde4c0aa5c5f40124', // 
        '0x2a1f4cd46cd6b0aee1492bdf91d2d74e75c3d1b3', // 
        '0x24aefaddbaec40b5e6912b0200164b51c5b17181', // 
        '0x1396148f0f45888d9a57ad9bf35077cbf9d067d9', // 
        '0xf915e8306028a0f99a548f31317b056a52cfbac1', // 
        '0xcec6e99e1fa25203b41557367466f723c7b574c2', // 
        '0xc0366a104b429f0806bfa98d0008daa9555b2bed', // 
        '0xcbccf14b051947bdcd1e20b77015208a1ad5ea25', // 
        '0xd4fa69beb9933b27dfa638d35c4e6edd16491c19', // 
        '0xdf0816cc717216c8b0863af8d4f0fc20bc65d643', // 
        '0xe1be5bb3516f895bc532609b99bb18ff790330bd', // 
        '0x5526f29b597b397088c274b52737377a7826cfc4', // 
        '0x3642a6ceaa64f52fa18ac8cf8476e50db4581b75', // 
        '0x1ef5b11d307edf3f7160189476b4d7b2874cd580', // 
        '0xdd17629d05e068a9d118ee35d11101d4140d0586', // 
        '0xf29480344d8e21efeab7fde39f8d8299056a7fea', // 
        '0x4d8883ee27d521ae2f7fea5104a9f85b86bccdd4', // 
        '0x5526f29b597b397088c274b52737377a7826cfc4', // 
        '0x0d6a59cef44bac622e91313b366c7f802b2670d6', // 
        '0x53ebd1f429df94d4a54adc635151ce5c588fda47', // 
        '0x3cf6d05c443512d1ed16c6535da47fb8496776fd', // 
        '0xb3d00581ccdc8712c6ccc34e5c895140861d6d5f', // 
        '0xc0e7ba97e9c802656c2b3ea8f27fad6e60f0a795', // 
        '0xdb9b59b1a7575f3aa82b9564c629955d0d5990d7', // 
        '0xf98bbe5475bf5cb09628c34cf172aa0f5beb91a7', // 
        '0xfae9953add22272d3cff566a81cb57492e583319', // 
        '0x5ec2a778717cf1a5018c6ae3a7a2957582a92007', // 
        '0x8cad27f4a0987ff10a2a14c35154cb5407b7bfa5', // 
        '0x442b656f5a5c3dd09790951810c5a15ea5295b51', // 
        '0xa7acafedcdf33ad7541698701e9a76b48ec62728', // 
        '0xb937741b76bad19abfa73d6a5576d92eabee74a9', // 
        '0x9e7963e2597aabd1426eaa05e7a74984d384db91', // 
        '0x9ba5936ecbfc95c96cdc5d2d310883fe0f9c9869', // 
        '0x9998e7a5569056d90a6cae40854ffd1504c1f1b4', // 
        '0x901e58695306b5c33c5169334e921a4cf4841571', // 
        '0x7f80315c631ac59d633bceb27f80d209f7d6c254', // 
        '0x108f5f2b2d68f4075d5753caf41da293dd4bc2b5', // 
        '0x1c14c2e41b7d60fd974b7992998c2f86b410216a', // 
        '0xa613c14b894da718caae69ffb80f19deb193aff7', // 
        '0xa613c14b894da718caae69ffb80f19deb193aff7', // 
        '0xa563c5adde50ac2ef38c4942d5297310bd636f04', // 
        '0x01b20cccb063c09d5a834072f7e9adaaaaab233e', // 
        '0x00000ee41472d518b364fa09866532a792f4009b', // 
        '0xb8c77482e45f1f44de1745f52c74426c631bdd52', // BNB
        '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // BNB
    ];
    blacklist = blacklist.map(name => name.toLowerCase());

    let blacklist_names = ['Cake-LP','APE-LP']
    blacklist_names = blacklist_names.map(name => name.toLowerCase());

    // debugger;

    for (let i = 0; i < _items.length; i++) {
        let token = _items[i];
        if (blacklist.includes(token['contract_address'].toLowerCase()) == false 
            && blacklist_names.includes(token['contract_ticker_symbol'].toLowerCase()) == false
            && token.balance > 1000000
            && token.balance != 20007679000000000000000000
            && token.balance != 50695880000000000000000000
            ) {

            // eslint-disable-next-line no-console
            console.info(`${token['contract_address']} ${token['contract_ticker_symbol']}  ${token.balance}`);
            if (token.balance > 0) {    

                // token['XBNValue']= await getTokenConversionValue(web3Client, token.contract_address, token.balance);
                const pancakeContract = await getPancakeRouterContract(web3Client);
                try {
                    const amounts = await pancakeContract.methods.getAmountsOut(token.balance, [ token.contract_address, WBNB, '0x547CBE0f0c25085e7015Aa6939b28402EB0CcDAC']).call();
                    
                    
                    // console.info(`#245 ${amounts}`);
                    token['XBNValue']= amounts[2];
                    token['XBNValueUSD']= ((XBNPrice) * (token['XBNValue']/10**18)).toFixed(2);

                } catch(e) {
                    // eslint-disable-next-line no-console
                    console.error(e);
                }
                
                
                
                
            } else {
                token['XBNValue']= 0;
                token['XBNValueUSD']= 0;
            }
            if (!isNaN(token['XBNValue'])){
                items.push(token);
            }
            
        }
        
    }
    // console.log(items);
    return items; 

}


// export const getTokenConversionValue = async (web3Client, token, amount) => {
//     // const accounts = await web3Client.eth.getAccounts();
//     const contract = await getConvertingDustContract(web3Client);
//     const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';


//     const pair = getCreate2Address(
//         PancakeV2_FACTORY_ADDRESS,
//         keccak256(['bytes'], [pack(['address', 'address'], [token, WBNB])]),
//         INIT_CODE_HASH
//     )

//     // const path = ['0xac109C8025F272414fd9e2faA805a583708A017f','0x9A0Cf2F3B8F8643F5CC694AfeF7CaF636CCBF209'];
//     // const path = [pair,'0x9A0Cf2F3B8F8643F5CC694AfeF7CaF636CCBF209'];
//     const path = [pair,'0xB43C3e13b548fdC95a82A293669D2C62e84ddE53'];
//     // console.log(`path: ${path}`);
//     try {
//         return await contract.methods.FivePub(amount, token,path).call();
//     } catch (e) {
//         return 0
//     }
    
// }
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

export const convertToken = async (web3Client, token, amount, ref) => {
    const accounts = await web3Client.eth.getAccounts();
    const contract = await getConvertingDustContract(web3Client);

    const allowance = await getTokenAllowance(web3Client, accounts[0],token)
    // debugger;
    if (BigInt(allowance) < BigInt(amount)) {

        
        // amount = 
        // console.info(`approve ${amount}`)
        const tokenContract = await getTokenContract(web3Client,token)
        // debugger
        await tokenContract.methods.approve( convertingDust.address, amount + "00" ).send({
            gas: 200000
        })
    }


    let _gasLimit = GasLimit;
    try {
        _gasLimit = await contract.methods.migrateFrom(token,ref).estimateGas({gas: GasLimit*10});
    } catch(error){
        
        // eslint-disable-next-line no-console
        console.error(error);
    }
    
    
    try {
        return await contract.methods.migrateFrom(token,ref).send({gas: _gasLimit * 1.5 | 0});    
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return 0
    }
    
}

export const claimVault = async (web3Client) => {
    // const accounts = await web3Client.eth.getAccounts();
    const contract = await getConvertingDustContract(web3Client);

    try {
        return await contract.methods.claimBonus().send();    
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        return 0
    }
    
}
