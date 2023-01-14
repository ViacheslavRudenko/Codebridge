import { AlertColor } from "@mui/material";
import { Article } from "./article";

//Articles
export interface ArticlesItemPropsType {
    article: Article
    isMainPage?: boolean
}

//Error
export interface PageErrPropsType {
    content: string,
    type?: AlertColor
}