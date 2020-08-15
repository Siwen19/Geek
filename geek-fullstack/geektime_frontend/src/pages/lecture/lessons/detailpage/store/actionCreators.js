import {
  getTitleContentRequest,
  getIntroContentRequest,
  getCatalogContentRequest,
  getRecommendContentRequest,
  getCommentContentRequest,
} from "../../.././../../api/request";

import {
  CHANGE_TITLE_CONTENT,
  CHANGE_PERSON_ID,
  CHANGE_INTRODUCTION_CONTENT,
  CHANGE_CATALOGUE_CONTENT,
  CHANGE_RECOMMEND_CONTENT,
  CHANGE_COMMENT_CONTENT,
} from "./constants";

export const getTitleContent = () => {
  return (dispatch, getState) => {
    const { personColumn } = getState();
    getTitleContentRequest(personColumn.personId.id)
      .then((data) => {  
        dispatch(changeTitleContent(data.data.intros[0]));
      })
      .catch(() => {
        console.log("个人标题请求出错");
      });
  };
};

export const getIntroContent = () => {
  return (dispatch, getState) => {
    const { personColumn } = getState();
    getIntroContentRequest(personColumn.personId.id)
      .then((data) => {
        // console.log(data);
        dispatch(changeIntroContent(data.data.intros))
      })
      .catch(() => {
        console.log("课程简介请求失败");
      });
  };
};
export const getCatalogContent = () => {
  return (dispatch, getState) => {
    const { personColumn } = getState();
    getCatalogContentRequest(personColumn.personId.id)
      .then((data) => {
        // console.log(data);
        dispatch(changeIntroContent(data.data.catalog))
      })
      .catch(() => {
        console.log("课程目录请求失败");
      });
  };
};
export const getRecommendContent = () => {
  return (dispatch, getState) => {
    const { personColumn } = getState();
    getRecommendContentRequest(personColumn.personId.id)
      .then((data) => {
        // console.log(data);
      })
      .catch(() => {
        console.log("课程推荐请求失败");
      });
  };
};
export const getCommentContent = () => {
  return (dispatch, getState) => {
    const { personColumn } = getState();
    getCommentContentRequest(personColumn.personId.id)
      .then((data) => {
        console.log(data);
        dispatch(changeCommentContent(data.data))
      })
      .catch(() => {
        console.log("课程评论请求失败");
      });
  };
};
export const changePersonId = (id) => {
  return {
    type: CHANGE_PERSON_ID,
    data: id,
  };
};

export const changeTitleContent = (id) => {
  return {
    type: CHANGE_TITLE_CONTENT,
    data: id,
  };
};

export const changeIntroContent = (data) => {
  return {
    type: CHANGE_INTRODUCTION_CONTENT,
    data,
  };
};

export const changeCatalogContent = (data) => {
  return {
    type: CHANGE_CATALOGUE_CONTENT,
    data,
  };
};

export const changeRecommendContent = (data) => {
  return {
    type: CHANGE_RECOMMEND_CONTENT,
    data,
  };
};

export const changeCommentContent = (data) => {
  return {
    type: CHANGE_COMMENT_CONTENT,
    data,
  };
};
