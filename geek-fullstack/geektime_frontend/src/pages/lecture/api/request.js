import { axiosInstance } from './config';

export const getLessonsListRequest = () => {
    return axiosInstance.get("/lessons/Lessons.json");
}