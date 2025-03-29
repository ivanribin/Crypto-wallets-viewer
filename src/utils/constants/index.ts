import { Address } from "@emurgo/cardano-serialization-lib-asmjs";
import { Buffer } from "buffer";

export interface IPaginatorItem {
    info: string,
    isButton: boolean;
    selectClass?: string;
}

export type TPaginatorItemsList = IPaginatorItem[];

export const enum PaginatorFieldsTexts {
    PREVIOUS_PAGE_SYMBOL = "<",
    NEXT_PAGE_SYMBOl = ">",
    SOME_PAGES_SYMBOL = "...",
}

export const enum PaginatorButtonSelectClasses {
    SELECT = "select",
    UNSELECT = "unselect",
}

export const DEFAULT_PAGE_NUMBER: number = 1;

export const PAGINATOR_SIBLING_COUNT: number = 1;
export const PAGINATOR_SOME_PAGES_SYMBOL_ITEM: IPaginatorItem = {
    info: PaginatorFieldsTexts.SOME_PAGES_SYMBOL,
    isButton: false,
}

export const enum WalletConnectMessages {
    NOT_FIND_EXTENSION = "Can not find an extension: ",
    PROPERLY_CONNECT_WARNING = ": Please make sure you have your extension connected properly",
    CONNECT_ERROR = "Error on connectWallet: ",
}

export const enum SelectButtonStyles {
    SELECT = "select",
    UNSELECT = "unselect",
}

export const getPaginatorButtonSelectClass = (isSelect: boolean): string => {
    return isSelect ? PaginatorButtonSelectClasses.SELECT : PaginatorButtonSelectClasses.UNSELECT;
}

export const isString = (variable: any): variable is string => {
    return typeof variable === 'string';
}

export const getTotalPageCount = (list: any[], pageItemsCount: number): number => {
    return Math.ceil(list.length / pageItemsCount);
}

export const getListShowPath = (list: any[], currentNumber: number, countElements: number) => {
    const firstIndex: number = (currentNumber - 1) * (countElements);

    return list.slice(firstIndex, firstIndex + countElements);
}

const getPaginatorButtonsListByPageNumbers = (firstNumber: number, lastNumber: number, currentNumber: number): TPaginatorItemsList => {
    let listLength = lastNumber - firstNumber + 1;

    return Array.from({ length: listLength }, (value, index) => {
        const buttonPageNumber: number = index + firstNumber;

        const paginatorButtonInfo: IPaginatorItem = {
            info: String(buttonPageNumber),
            isButton: true,
            selectClass: getPaginatorButtonSelectClass(buttonPageNumber === currentNumber),
        }

        return paginatorButtonInfo;
    });
};

export const getPaginatorButtonsNamesList = (currentNumber: number, totalPageNumber: number): TPaginatorItemsList => {
    const totalPageNumbers = PAGINATOR_SIBLING_COUNT + 5;

    if (totalPageNumbers >= totalPageNumber) {
        return getPaginatorButtonsListByPageNumbers(1, totalPageNumber, currentNumber);
    }

    const leftSiblingIndex = Math.max(currentNumber - PAGINATOR_SIBLING_COUNT, 1);
    const rightSiblingIndex = Math.min(
        currentNumber + PAGINATOR_SIBLING_COUNT,
        totalPageNumber
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageNumber - 2;

    const firstPageButton: IPaginatorItem = {
        info: "1",
        isButton: true,
        selectClass: getPaginatorButtonSelectClass(1 === currentNumber),
    };
    const lastPageButton: IPaginatorItem = {
        info: String(totalPageNumber),
        isButton: true,
        selectClass: getPaginatorButtonSelectClass(totalPageNumber === currentNumber),
    };

    if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * PAGINATOR_SIBLING_COUNT;
        let leftRange = getPaginatorButtonsListByPageNumbers(1, leftItemCount, currentNumber);

        return [...leftRange, PAGINATOR_SOME_PAGES_SYMBOL_ITEM, lastPageButton];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {

        let rightItemCount = 3 + 2 * PAGINATOR_SIBLING_COUNT;
        let rightRange = getPaginatorButtonsListByPageNumbers(
            totalPageNumber - rightItemCount + 1,
            totalPageNumber, currentNumber
        );
        return [firstPageButton, PAGINATOR_SOME_PAGES_SYMBOL_ITEM, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = getPaginatorButtonsListByPageNumbers(leftSiblingIndex, rightSiblingIndex, currentNumber);
        return [firstPageButton, PAGINATOR_SOME_PAGES_SYMBOL_ITEM, ...middleRange, PAGINATOR_SOME_PAGES_SYMBOL_ITEM, lastPageButton];
    }

    return [];
};

export const decodeAddress = (address: string) => {
    return Address.from_bytes(Buffer.from(address, "hex")).to_bech32();
};