import { getLessonsListRequest, getLessonsInfoRequest } from '../../api/request';

export const CHANGE_STUDY_PATH = "CHANGE_STUDY_PATH";
export const CHANGE_LESSONS_DIRECTION = "CHANGE_LESSONS_DIRECTION";
export const CHANGE_ALL_LESSONS = "CHANGE_ALL_LESSONS";
export const CHANGE_ENTER_LOADING = "CHANGE_ENTER_LOADING";

export const getLessonsList = () => {
    return (dispatch) => {
        getLessonsListRequest().then(data => {
            dispatch(changeStudyPath(data.data.STUDY_PATH_TITLE));
            dispatch(changeLessonsDirection(data.data.LESSONS_DIRECTION_TITLE));
            dispatch(changeEnterLoading(false));
        }).catch(() => {
            console.log("课程数据传输有误");
        })
        getLessonsInfoRequest().then(data => { 
            dispatch(changeAllLessons(data.data.data.infos));
        }).catch(() => {
            console.log("课程信息传输有误");
        })
    }
}

export const changeStudyPath = (data) => {
    return {
        type: CHANGE_STUDY_PATH,
        data
    }
}

export const changeLessonsDirection = (data) => {
    return {
        type: CHANGE_LESSONS_DIRECTION,
        data
    }
}

export const changeAllLessons = (data) => {
    return {
        type: CHANGE_ALL_LESSONS,
        data
    }
}

export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
})