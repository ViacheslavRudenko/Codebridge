import { Article } from "../types/article/article"
import axios from "./instance"

export const getArticles = () => {
    const data = axios.get<Article[]>('')
    return data
}



