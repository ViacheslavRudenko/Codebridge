import axios from "axios";
import { Token } from "../../types/api";

const url: Token = process.env.REACT_APP_API_URL || "";

const instance = axios.create({
    baseURL: url
});


export default instance;