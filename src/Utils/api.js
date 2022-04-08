import axios from 'axios';
import {ServerURL} from "Utils/constants";

export const apiConfig = {
    // timeout: 30000,
    baseURL: ServerURL,
    headers: {
        common: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        // token: token
    }
}

const api = axios.create(apiConfig);

export default api;
