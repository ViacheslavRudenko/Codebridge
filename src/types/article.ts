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
export type IndicesTypes = [number, number][]

export interface MatchesType { indices: IndicesTypes, value: string, key: string }


export interface FilteredArticles {
    item: Article,
    refIndex: number
    matches?: MatchesType[]
}