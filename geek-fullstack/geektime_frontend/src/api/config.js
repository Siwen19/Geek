import axios from 'axios';

export const baseUrl = "http://localhost:8080";

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance };