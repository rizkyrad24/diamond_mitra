import axios from "axios";

export const baseURL = process.env.VUE_APP_API_URL

const ApiManager = axios.create({
    baseURL: baseURL,
    responseType: 'json'
})

export default ApiManager;