import {getXBNContract} from "@/libs/xbt";

export const QuestAirdrop = {
    address: process.env.VUE_APP_QUEST_AIRDROP_CONTRACT_ADDRESS,
    jsonInterface: require('@/assets/contracts/QuestAirdrop.json')
}

export const getAirdropContract = async (web3Client) => {
    const accounts = await web3Client.eth.getAccounts();
    return new web3Client.eth.Contract(
        QuestAirdrop.jsonInterface.abi,
        QuestAirdrop.address,
        {
            gas: 100000,
            from: accounts[0]
        }
    );
}

export const getQuestAirdropContractBalance = async (web3Client) => {
    const contract = await getXBNContract(web3Client);
    const balance = await contract.methods.balanceOf(QuestAirdrop.address).call();
    const decimals = await contract.methods.decimals().call();
    return balance / (10 ** decimals);
};

export const claimQuestAirdrop = async (web3Client, questCode) => {
    const contract = await getAirdropContract(web3Client);
    await contract.methods.claimRewardCode(questCode.toString()).send();
}

export const emergencyWithdraw = async (web3Client) => {
    const contract = await getAirdropContract(web3Client);
    await contract.methods.emergencyWithdraw().send();
}

export const generateQuestCode = async (web3Client, quantity, amount) => {
    const contract = await getAirdropContract(web3Client);
    await contract.methods.generateQuestCode(
        quantity.toString(),
        web3Client.utils.toWei(amount, 'ether'),
    ).send();
}

export const getQuestCodes = async (web3Client) => {
    const questAirdropContract = await getAirdropContract(web3Client);
    try {
        const result = await questAirdropContract.methods.getQuestCodes().call();
        return result;
    } catch (e) {
        return []
    }
}

export const getQuestCodeMeta = async (web3Client, rewardCode) => {
    const questAirdropContract = await getAirdropContract(web3Client);

    const saleRule = await questAirdropContract.methods.getCodeMetaData(rewardCode.toString()).call();

    const {
        '0': _rewardCode, '1': status, '2': claimableAmount, '3': claimedBy, '4': claimedAt, '5': createdAt
    } = saleRule;

    return {
        rewardCode: _rewardCode,
        status,
        claimableAmount: Number(web3Client.utils.fromWei(claimableAmount.toString(), 'ether')),
        claimedBy,
        claimedAt,
        createdAt
    };
};
