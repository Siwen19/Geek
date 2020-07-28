import { axiosInstance } from './config';

export const getLessonsListRequest = () => {
    return axiosInstance.get("/lessons/lesson");
}
export const getLessonsInfoRequest = (count) => {
    return axiosInstance.get("/lessons/lessons");
}