// ~/types/news-iteminterface.d.ts
export interface NewsItemInterface {
    id: string;
    server: string;
    tags: Array<string>;
    title: string;
    text: string;
    date: string;
    newsViewClass: string;
    homePreviewImage: string;
    serverPreviewImage: string;
    newsPreviewImage: string;
    portraitImage: string;
}