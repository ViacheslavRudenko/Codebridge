import { Article } from "../types/article"
import axios from "../utils/instance/instance"

export const getArticles = () => {
    const data = axios.get<Article[]>('')
    return data
}

export const getArticle = (id: string) => {
    const data = axios.get<Article>(`/${id}`)
    return data
}



