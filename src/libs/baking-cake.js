
let GasLimit = 370000
const BusdAddress = '0xe9e7cea3dedca5984780bafc599bd69add087d56';
const XbnAddress = '0x547cbe0f0c25085e7015aa6939b28402eb0ccdac';
const CakeAddress = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82';


export const Baking = {
    address: process.env.VUE_APP_BAKING_CAKE_ADDRESS || "0xc50323b2FB63A68cf5C039fEBAd6B8ECc6Be4328",
    
    jsonInterface: require('@/assets/contracts/Baking.json')
}

export const XBN = {
    address: process.env.VUE_APP_XBN_CONTRACT_ADDRESS || XbnAddress,
    
    jsonInterface: require('@/assets/contracts/XBN.json')
}

export const CAKE = {
    address: CakeAddress,
    
    jsonInterface: require('@/assets/contracts/CAKE.json') // ERC20 functions
}

export const PancakeRouter = {
    address: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
    jsonInterface: require('@/assets/contracts/Router.json')
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

export const getBakingContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        Baking.jsonInterface,
        Baking.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}


export const getXBNContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    
    // console.info(XBN);
    return new web3Client.eth.Contract(
        XBN.jsonInterface.abi,
        XBN.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}


export const getCAKEContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        CAKE.jsonInterface,
        CAKE.address,
        {
            gas: GasLimit,
            from: accounts[0]
        }
    );
}


export const depositCake = async (web3Client, amount) => {

    amount = BigInt(amount * 10 ** 18) ; // CAKE decimals

    const bakingContract = await getBakingContract(web3Client);
    const CAKEContract = await getCAKEContract(web3Client);
    const accounts = await web3Client.eth.getAccounts();

    
    const allowance = await CAKEContract.methods.allowance(accounts[0], Baking.address).call()
    // debugger;
    
    if (BigInt(allowance) < amount) {

        // debugger
        await CAKEContract.methods.approve( Baking.address, amount + "00" ).send({
            gas: 100000
        })
    }

    const _gasLimit = await bakingContract.methods.deposit(amount).estimateGas({gas: GasLimit*10});
    await bakingContract.methods.deposit(amount).send({gas:  _gasLimit * 1.5 | 0});
}


export const claimXBN = async (web3Client) => {

    
    const bakingContract = await getBakingContract(web3Client);

    const _gasLimit = await bakingContract.methods.getReward().estimateGas({gas: GasLimit*10});
    await bakingContract.methods.getReward().send({ gas:  _gasLimit * 1.5 | 0});
}


export const withdrawCakeAll = async (web3Client) => {

    
    const bakingContract = await getBakingContract(web3Client);

    const _gasLimit = await bakingContract.methods.withdrawAll().estimateGas({gas: GasLimit*10});
    await bakingContract.methods.withdrawAll().send({gas: _gasLimit * 1.5 | 0});
}


export const withdrawCake = async (web3Client,amount) => {
    
    const bakingContract = await getBakingContract(web3Client);

    amount = amount * 10 ** 18 ; // CAKE decimals
    const priceShare = await bakingContract.methods.priceShare().call();
    const shares = BigInt(amount / priceShare * 10 ** 18); // shares decimals is 18

    const _gasLimit = await bakingContract.methods.withdraw(shares).estimateGas({gas: GasLimit*10});
    await bakingContract.methods.withdraw(shares).send({gas: _gasLimit * 1.5 | 0});
}

function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      let e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      let e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
  }

export const getUserBakingData = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    const bakingContract = await getBakingContract(web3Client);
    const routerContract = await getRouterContract(web3Client);

    const CAKEContract = await getCAKEContract(web3Client);

    // console.info(`account: ${accounts[0]}`);   

    let earned = await bakingContract.methods.earned(accounts[0]).call();  
    
    // console.info(`Earned: ${earned}`);

    if (earned>0) {
        earned = await routerContract.methods.getAmountsOut(earned,[CakeAddress,BusdAddress,XbnAddress]).call();
        earned = earned[2]
        // console.info(`176 Earned: ${earned}`);
    }
    // debugger;
    const priceShare = await bakingContract.methods.priceShare().call();
    // console.info(`Price share: ${priceShare}`);

    const shares = await bakingContract.methods.sharesOf(accounts[0]).call();
    
    let tvl = await bakingContract.methods.balance().call();
    
    if (tvl>0) {
        tvl = await routerContract.methods.getAmountsOut(tvl,[CakeAddress,BusdAddress]).call();
        tvl = tvl[1]
    }
    // console.info(`TVL: ${tvl}`);

    const cakeBalance = await CAKEContract.methods.balanceOf(accounts[0]).call();
    // console.info(`Cake balance: ${cakeBalance}`);
    
    return {
        cakeBalance: cakeBalance/ 10**18,
        earned: toFixed(earned*1.13/ 10**18),
        stakingBalance: toFixed((priceShare/ 10**18)* (shares/ 10**18)),
        shares: shares,
        priceShare: priceShare,
        tvl: Math.round(tvl/ 10**15)/10**3,
        // xbnBalance: xbnBalance
    };
}
