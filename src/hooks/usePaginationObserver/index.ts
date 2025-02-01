import { useState } from "react";
import { IDisable, INavigationState, TPosts } from "../../types";
import { DEFAULT_PAGE_NUMBER, getListShowPartByPageNumber, getTotalPageCount } from "../../utils/constants";

const usePaginationObserver = (list: any[] | null) => {
    const [pageNumber, setPageNumber] = useState<number>(DEFAULT_PAGE_NUMBER);

    const showList: TPosts = list ? getListShowPartByPageNumber(list, pageNumber) : [];

    const totalPageNumber: number = list ? getTotalPageCount(list.length) : 0;

    const paginatorDisable: IDisable = {
        previousPageButton: pageNumber === 1,
        nextPageButton: pageNumber === totalPageNumber,
    }

    const navigationState: INavigationState = {
        currentPageNumber: pageNumber,
        totalPageNumber: totalPageNumber
    }

    const setPreviousPage = (): void => {
        const currentPageNumber = pageNumber;
        const previousPageNumber = currentPageNumber - 1;

        setPageNumber(previousPageNumber > 0 ? previousPageNumber : currentPageNumber);
    };

    const setNextPage = (): void => {
        const currentPageNumber = pageNumber;
        const next = currentPageNumber + 1;

        setPageNumber(next <= totalPageNumber ? next : currentPageNumber);
    };

    return {
        showList,
        setPreviousPage,
        setNextPage,
        paginatorDisable,
        navigationState,
    }
}

export default usePaginationObserver;