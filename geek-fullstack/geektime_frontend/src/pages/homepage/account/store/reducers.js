import { INVEST_MONEY, CHANGE_LIST, COST_MONEY } from './constants';
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
        case COST_MONEY: 
        return {
            ...state,
            money: (parseFloat(state.money) - ((isNaN(parseFloat(action.payload))? 0:parseFloat(action.payload)))).toFixed(2)
        }
        default:
            return state;
    }
}