import { Article } from "../../../types/article";

const filteredItem = (key: string, articles: Article[], value: string): Article[] => {
    return articles.filter((article: any) => {
        return article[key].toLowerCase().includes(value.toLowerCase())
    }
    );
};


const removeDublicate = (arr: Article[]): Article[] => {
    return arr.filter(
        (value, index, self) =>
            index ===
            self.findIndex((t) => t.id === value.id && t.title === value.title)
    );
};

export const filteredArticles = (articles: Article[], value: string): Article[] => {
    const filteredTitles = filteredItem("title", articles, value);
    const filteredDescriptions = filteredItem("summary", articles, value);
    const filteredConcatArr = [...filteredTitles, ...filteredDescriptions];
    return removeDublicate(filteredConcatArr);
};
