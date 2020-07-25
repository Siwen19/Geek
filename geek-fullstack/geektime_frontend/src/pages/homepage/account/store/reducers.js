import { INVEST_MONEY } from './actions';
const defaultMoney = {
    money: "0.00", 
} 

export default (state = defaultMoney, action) => {
    switch (action.type) {
        case INVEST_MONEY: 
            return {
                money: ((isNaN(parseFloat(action.data))? 0:parseFloat(action.data)) + parseFloat(state.money)).toFixed(2)
            };
    
        default:
            return state;
    }
}