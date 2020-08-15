import {
    INVEST_MONEY, 
} from './constants' 
export const changeDefaultMoney = (data) => {
    return {
        type: INVEST_MONEY,
        payload: data
    }
} 