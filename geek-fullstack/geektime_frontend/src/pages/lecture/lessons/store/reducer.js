import {
    CHANGE_STUDY_PATH,
    CHANGE_LESSONS_DIRECTION,
    CHANGE_ALL_LESSONS,
    CHANGE_ENTER_LOADING
} from './actions';

const defaultList = {
    studyPath: [],
    lessonsDirection: [],
    allLessons: [],
    enterLoading: true,
}

export default (state = defaultList, action) => {
    const { type, data } = action;
    switch (type) {
        case CHANGE_STUDY_PATH:
            return {
                ...state,
                studyPath: data
            };
        case CHANGE_LESSONS_DIRECTION:
            return {
                ...state,
                lessonsDirection: data
            };
        case CHANGE_ALL_LESSONS:
            return {
                ...state,
                allLessons: data
            }
        case CHANGE_ENTER_LOADING:
            return {
                ...state,
                enterLoading: data
            }
        default:
            return state;
    }
}