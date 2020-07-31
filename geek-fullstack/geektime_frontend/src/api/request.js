import { axiosInstance } from './config';

export const getLessonsListRequest = () => {
    return axiosInstance.get("/lessons/lesson");
}
export const getLessonsInfoRequest = (count) => { 
    return axiosInstance.get(`/lessons/lessons?offset=${count}`);
}
export const getTitleContentRequest = (id) => {
    return axiosInstance.get(`/lessons/lessons/${id}`);
}
export const getIntroContentRequest = (id) => {
    return axiosInstance.get(`/lessons/lessons/${id}?tab=intro`)
}
export const getCatalogContentRequest = (id) => {
    return axiosInstance.get(`/lessons/lessons/${id}?tab=catalog`)
}
export const getRecommendContentRequest = (id) => {
    return axiosInstance.get(`/lessons/lessons/${id}?tab=recommend`)
}
export const getCommentContentRequest = (id) => {
    return axiosInstance.get(`/lessons/lessons/${id}?tab=comment`)
}