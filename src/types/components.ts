import { AlertColor } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Article, FilteredArticles } from "./article";

//Articles
export interface ArticlesItemHomePropsType {
    article: FilteredArticles
}
export interface ArticlesItemSinglePropsType {
    article: Article
}

//Error
export interface PageErrPropsType {
    content: string,
    type?: AlertColor
}

//Search

export interface SearchPropsType {

    setResult: Dispatch<SetStateAction<any>>;
}



