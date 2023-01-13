import { Article } from "../types/article"
import axios from "../utils/instance/instance"

export const getArticles = () => {
    const data = axios.get<Article[]>('')
    return data
}



