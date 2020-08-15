import { INVEST_MONEY, CHANGE_LIST } from './constants';
const defaultMoney = {
    money: "0.00", 
    list: {}
} 

export default (state = defaultMoney, action) => {
    switch (action.type) {
        case INVEST_MONEY: 
            return {
                ...state,
                money: ((isNaN(parseFloat(action.data))? 0:parseFloat(action.data)) + parseFloat(state.money)).toFixed(2)
            };
        case CHANGE_LIST: 
            return {
                ...state, 
                list: action.payload
        }
        default:
            return state;
    }
}