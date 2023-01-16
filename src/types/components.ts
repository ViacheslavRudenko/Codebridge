import { AlertColor } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
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

//Search

export interface SearchPropsType {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}