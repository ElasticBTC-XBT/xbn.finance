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
            gas: 500000,
            from: accounts[0]
        }
    );
}

const ticketDecimal = 1000000000000000000;

export const getPlayerVault = async (web3Client) => {
    const contract = await getLottoContract(web3Client);
    const accounts = await web3Client.eth.getAccounts();
    const result = await contract.methods.getPlayerInfoByAddress(accounts[0]).call();
    const currentBalance = await web3Client.eth.getBalance(accounts[0]);

    const {
        '0': tickets, '1': winnings, '2': general, '3': spentBNB
    } = result;

    return {
        address: accounts[0],
        tickets: tickets / ticketDecimal,
        winnings: web3Client.utils.fromWei(winnings.toString(), 'ether'),
        general: web3Client.utils.fromWei(general.toString(), 'ether'),
        spentBNB: web3Client.utils.fromWei(spentBNB.toString(), 'ether'),
        currentBNBBalance: web3Client.utils.fromWei(currentBalance.toString(), 'ether'),
    }
}

export const getCurrentRoundInfo = async (web3Client) => {
    const contract = await getLottoContract(web3Client);
    const result = await contract.methods.getCurrentRoundInfo().call();
    const burnFund = await contract.methods.burnFund_().call();
    const timeLeft = await contract.methods.getTimeLeft().call();

    const {
        '0': roundId,
        '1': tickets,
        '2': endedAt,
        '3': startAt,
        '4': currentPot,
        '5': totalSpent,
        '6': currentLead
    } = result;

    return {
        roundId,
        tickets: tickets / ticketDecimal,
        endAt: endedAt * 1000,
        startAt: startAt * 1000,
        timeLeft: timeLeft * 1000,
        currentPot: web3Client.utils.fromWei(currentPot.toString(), 'ether'),
        totalSpent: web3Client.utils.fromWei(totalSpent.toString(), 'ether'),
        burnFund: web3Client.utils.fromWei(burnFund.toString(), 'ether'),
        currentLead: currentLead
    }
}

export const getRoundInfo = async (web3Client, _roundId) => {
    const contract = await getLottoContract(web3Client);
    const result = await contract.methods.getRoundInfo(
        _roundId.toString()
    ).call();
    const burnFund = await contract.methods.burnFund_().call();
    const timeLeft = await contract.methods.getTimeLeft().call();

    const {
        '0': roundId,
        '1': tickets,
        '2': endedAt,
        '3': startAt,
        '4': currentPot,
        '5': totalSpent,
        '6': currentLead
    } = result;

    console.log({result});

    return {
        roundId,
        tickets: tickets / ticketDecimal,
        endAt: endedAt * 1000,
        startAt: startAt * 1000,
        timeLeft: timeLeft * 1000,
        currentPot: web3Client.utils.fromWei(currentPot.toString(), 'ether'),
        totalSpent: web3Client.utils.fromWei(totalSpent.toString(), 'ether'),
        burnFund: web3Client.utils.fromWei(burnFund.toString(), 'ether'),
        currentLead: currentLead
    }
}

export const calcKeysReceived = async (web3Client, {roundId, amountInBNB}) => {
    const contract = await getLottoContract(web3Client);

    const result = await contract.methods.calcKeysReceived(
        roundId.toString(),
        web3Client.utils.toWei(amountInBNB.toString(), 'ether')
    ).call();

    return result / ticketDecimal;
}


export const buyTicket = async (web3Client, {amountBuy}) => {
    const contract = await getLottoContract(web3Client);

    return contract.methods.buyXidXBN(
        '0', // amount XBN
        '1' // this is to use BNB
    ).send({
        value: web3Client.utils.toWei(amountBuy.toString(), 'ether')
    });
}

export const withdraw = async (web3Client) => {
    const contract = await getLottoContract(web3Client);
    return contract.methods.withdraw().send();
}
