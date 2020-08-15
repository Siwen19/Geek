import { getFindInfoRequest } from '../../../api/request';

import { 
    CHANGE_SUPERMARKET_CONTENT,
    CHANGE_CLASS_CONTENT,
    CHANGE_UNIVERSITY_CONTENT
} from './constants';

export const getFindInfo = () => {
    return (dispatch) => {  
        getFindInfoRequest().then(data => { 
            dispatch(changeShopContent(data.data.shop)); 
            dispatch(changeUniversityContent(data.data.gku)); 
            dispatch(changeClassContent(data.data.class)); 
        }).catch(() => {
            console.log("发现页面数据传输有误");
        })    
    }
}

export const changeShopContent = (data) => {
    return {
        type: CHANGE_SUPERMARKET_CONTENT,
        payload: data
    }
}
export const changeUniversityContent = (data) => {
    return {
        type: CHANGE_UNIVERSITY_CONTENT,
        payload: data
    }
}
export const changeClassContent = (data) => {
    return {
        type: CHANGE_CLASS_CONTENT,
        payload: data
    }
}
 