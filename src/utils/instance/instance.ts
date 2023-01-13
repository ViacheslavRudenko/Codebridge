import axios from "axios";
import { Token } from "../../types/api/api";

const token: Token = process.env.REACT_APP_API_TOKEN || "";
const url: Token = process.env.REACT_APP_API_URL || "";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

//if we have and need to use token for authorization
export const setAuthToken = (token: Token) => {
    if (token) {
        instance.defaults.headers.common["Authorization"] = token;
    } else {
        delete instance.defaults.headers.common["Authorization"];
    }
};

export default instance;