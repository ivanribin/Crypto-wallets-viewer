export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type TPostsInfo = string[];

export type TPosts = IPost[];

export interface IPaginatorItem {
    info: string,
    isButton: boolean;
    selectClass?: string;
}

export type TPaginatorItemsList = IPaginatorItem[];

export interface IButtonsDisable {
    previousPage: boolean;
    nexPage: boolean;
}

export interface INavigationState {
    currentPageNumber: number;
    totalPageNumber: number;
}