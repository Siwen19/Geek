import { INVEST_MONEY, CHANGE_LIST } from './constants';
const defaultMoney = {
    money: "0.00",  
} 

export default (state = defaultMoney, action) => {
    switch (action.type) {
        case INVEST_MONEY: 
            return {
                ...state,
                money: ((isNaN(parseFloat(action.payload))? 0:parseFloat(action.payload)) + parseFloat(state.money)).toFixed(2)
            };
        default:
            return state;
    }
}