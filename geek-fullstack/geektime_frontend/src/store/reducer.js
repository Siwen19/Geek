import { combineReducers } from 'redux';
import { reducer as lessonsReducer } from '../pages/lecture/lessons/store/index';
import { reducer as investMoney } from '../pages/homepage/account/store/index';
import { reducer as personDetails } from '../pages/lecture/lessons/detailpage/store/index';
import { reducer as findPageData } from '../pages/find/store/index'
import { reducer as homeData} from '../pages/homepage/store/index'
export default combineReducers({
    lessons: lessonsReducer,
    investMoney: investMoney,
    personColumn: personDetails,
    findPageData: findPageData,
    homeData: homeData
});