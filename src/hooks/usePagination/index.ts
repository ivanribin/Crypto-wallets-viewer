import { useMemo } from "react";
import { getPaginatorButtonsNamesList, type TPaginatorItemsList } from "@utils/constants";
import { IButtonsDisable } from "./meta";

const usePagination = (currentNumber: number, totalPageNumber: number) => {
    const paginatorInfo = useMemo(() => {
        const paginatorItemsList: TPaginatorItemsList = getPaginatorButtonsNamesList(currentNumber, totalPageNumber); 
        const buttonsDisable: IButtonsDisable = {
            previousPage: currentNumber === 1,
            nextPage: currentNumber === totalPageNumber,
        }

        return {
            paginatorItemsList,
            buttonsDisable,
        }
    }, [currentNumber, totalPageNumber])

    return paginatorInfo;
}

export default usePagination;