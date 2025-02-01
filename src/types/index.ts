export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type TPosts = IPost[];

export interface IDisable {
    previousPageButton: boolean;
    nextPageButton: boolean;
};

export interface INavigationState {
    currentPageNumber: number;
    totalPageNumber: number;
}