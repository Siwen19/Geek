import { getLessonsListRequest, getLessonsInfoRequest } from '../../../../api/request';

import {
  CHANGE_STUDY_PATH,
  CHANGE_LESSONS_DIRECTION,
  CHANGE_ALL_LESSONS,
  CHANGE_LIST_OFFSET,
  CHANGE_ENTER_LOADING,
  CHANGE_PULLUP_LOADING,
  CHANGE_PULLDOWN_LOADING 
} from './constants';

export const getLessonsList = () => {
    return (dispatch, getState) => { 
        const offset = getState().lessons.listOffset; 
        getLessonsListRequest().then(data => {
            dispatch(changeStudyPath(data.data.STUDY_PATH_TITLE));
            dispatch(changeLessonsDirection(data.data.LESSONS_DIRECTION_TITLE));
            dispatch(changeListOffset(data.data.length));  
        }).catch(() => {
            console.log("课程数据传输有误");
        })   
        getLessonsInfoRequest(0).then(data => {  
          dispatch(changeAllLessons(data.data.infos));
          dispatch(changeEnterLoading(false));
          dispatch(changePullDownLoading(false));
          dispatch(changeListOffset(data.data.infos.length));
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

export const changeListOffset = (data) => ({ 
  type: CHANGE_LIST_OFFSET,
  data
});

export const changeEnterLoading = (data) => ({
    type: CHANGE_ENTER_LOADING,
    data
})

//滑动最底部loading
export const changePullUpLoading = (data) => ({
    type: CHANGE_PULLUP_LOADING,
    data
  });
  
  //顶部下拉刷新loading
  export const changePullDownLoading = (data) => ({
    type: CHANGE_PULLDOWN_LOADING,
    data
  }); 

  export const refreshMoreLessonsInfoRequest = () => {
    return (dispatch, getState) => {  
      const offset = getState().lessons.listOffset; 
      const newData = getState().lessons.allLessons; 
      getLessonsInfoRequest(offset).then(data => { 
        dispatch(changeAllLessons([...newData, ...data.data.infos]));
        dispatch(changeEnterLoading(false));
        dispatch(changePullUpLoading(false));
        dispatch(changeListOffset(offset + data.data.infos.length));
    }).catch(() => {
        console.log("课程信息传输有误");
    })
    }
  }