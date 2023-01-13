import { AlertColor } from "@mui/material";
import { Article } from "./article";

//Articles
export interface ArticlesItemPropsType {
    article: Article
}

//Error
export interface PageErrPropsType {
    content: string,
    type?: AlertColor
}