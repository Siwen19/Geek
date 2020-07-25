export const INVEST_MONEY = "INVEST_MONEY"; 

export const changeDefaultMoney = (data) => {
    return {
        type: INVEST_MONEY,
        data
    }
}