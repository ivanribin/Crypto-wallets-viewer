export const enum PaginatorButtonsTexts {
    PREVIOUS_PAGE = "<",
    NEXT_PAGE = ">",
}

export const DEFAULT_PAGE_NUMBER: number = 1;
export const PAGE_POSTS_COUNT: number = 10;

export const getTotalPageCount = (dataListLength: number): number => {
    return Math.ceil(dataListLength / PAGE_POSTS_COUNT);
}

export const getListShowPartByPageNumber = (list: any[], pageNumber: number): any[] => {
    const firstShowPartElementIndex = (pageNumber - 1) * PAGE_POSTS_COUNT;

    return list.slice(firstShowPartElementIndex, firstShowPartElementIndex + PAGE_POSTS_COUNT);
}