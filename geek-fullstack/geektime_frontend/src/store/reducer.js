import { combineReducers } from 'redux';
import { reducer as lessonsReducer } from '../pages/lecture/lessons/store/index';

export default combineReducers({
    lessons: lessonsReducer
});