import { getHomeInfoRequest } from '../../../api/request';
import {
    INVEST_MONEY,
    CHANGE_LIST
} from './constants'

export const getListInfo = () => {
    return (dispatch) => {
        getHomeInfoRequest().then(data => { 
            dispatch(changeList(data.data))
        }) 
    }
}

export const changeDefaultMoney = (data) => {
    return {
        type: INVEST_MONEY,
        payload: data
    }
}

export const changeList = (data) => {
    return {
        type: CHANGE_LIST,
        payload: data
    }
}