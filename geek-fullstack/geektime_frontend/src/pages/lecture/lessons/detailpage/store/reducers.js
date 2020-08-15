import {
  CHANGE_TITLE_CONTENT,
  CHANGE_PERSON_ID,
  CHANGE_INTRODUCTION_CONTENT,
  CHANGE_CATALOGUE_CONTENT,
  CHANGE_RECOMMEND_CONTENT,
  CHANGE_COMMENT_CONTENT,
} from "./constants";

const defaultContent = {
    personId: '',
    titleContent: {},
    introContent: [],
    catalogContent: [],
    recommendContent: [],
    commentContent: []
}

export default (state = defaultContent, action) => {
    switch (action.type) {
        case CHANGE_PERSON_ID:
            return {...state, personId: action.data}
        case CHANGE_TITLE_CONTENT:
            return {...state, titleContent: action.data} 
        case CHANGE_INTRODUCTION_CONTENT:
            return {...state, introContent: action.data!==undefined && action.data}
        case CHANGE_CATALOGUE_CONTENT:
            return {...state, catalogContent: action.data}
        case CHANGE_RECOMMEND_CONTENT:
            return {...state, recommendContent: action.data}
        case CHANGE_COMMENT_CONTENT:
            return {...state, commentContent: action.data}
        default:
            return state;
    }
}