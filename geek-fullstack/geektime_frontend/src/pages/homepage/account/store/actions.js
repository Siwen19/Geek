import {
    INVEST_MONEY,
    COST_MONEY 
} from './constants' 

export const changeDefaultMoney = (data) => {
    return {
        type: INVEST_MONEY,
        payload: data
    }
} 
export const costMoney = (data) => {
    return {
        type: COST_MONEY,
        payload: data
    }
} 