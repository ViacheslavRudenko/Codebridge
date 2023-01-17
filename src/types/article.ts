export interface Article {
    events: [],
    featured: boolean,
    id: number,
    imageUrl: string,
    launches: [],
    newsSite: string,
    publishedAt: string,
    summary: string,
    title: string,
    updatedAt: string,
    url: string,
}

export interface FilteredArticles {
    item: Article,
    refIndex: number
    matches?: any
}