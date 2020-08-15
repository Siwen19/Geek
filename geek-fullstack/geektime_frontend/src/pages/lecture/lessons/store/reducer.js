import * as actionTypes from './constants';

const defaultList = {
    studyPath: [],
    lessonsDirection: [],
    allLessons: [],
    enterLoading: true,
    pullUpLoading: false,
    pullDownLoading: false,
    listOffset: 0, 
}

export default (state = defaultList, action) => { 
    const { type, data } = action; 
    switch (type) {
        case actionTypes.CHANGE_STUDY_PATH:
            return {
                ...state,
                studyPath: data
            };
        case actionTypes.CHANGE_LESSONS_DIRECTION:
            return {
                ...state,
                lessonsDirection: data
            };
        case actionTypes.CHANGE_ALL_LESSONS:
            return {
                ...state,
                allLessons: data
            };
        case actionTypes.CHANGE_LIST_OFFSET: 
            return { ...state, listOffset: action.data };
        case actionTypes.CHANGE_ENTER_LOADING:
            return { ...state, enterLoading: action.data };
        case actionTypes.CHANGE_PULLUP_LOADING:
            return { ...state, pullUpLoading: action.data };
        case actionTypes.CHANGE_PULLDOWN_LOADING:
            return { ...state, pullDownLoading: action.data };
        default:
            return state;
    }
}