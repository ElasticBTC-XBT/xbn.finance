import {getXBNContract} from "@/libs/xbt";

export const FomoLotto = {
    address: process.env.VUE_APP_LOTTO_CONTRACT_ADDRESS,
    jsonInterface: require('@/assets/contracts/FomoLotto.json')
}

export const getLottoContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        FomoLotto.jsonInterface.abi,
        FomoLotto.address,
        {
            gas: 300000,
            from: accounts[0]
        }
    );
}
