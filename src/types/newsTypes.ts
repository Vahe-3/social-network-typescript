export interface  NewsType {
    source: {
        id: null | string;
        name: string | null;
    };

    author: null | string;
    title: string | null;
    description: string | null;
    url: string | null;
    urlToImage: string | null;
    publishedAt: string | null;
    content: string | null;

}

export interface  NewsStateTypes {
    isLoading: boolean;
    error: string | null;
    news: NewsType[] | null;
};

