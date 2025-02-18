import { useMemo } from "react";
import { IButtonsDisable, INavigationState, TPaginatorItemsList } from "../../types";
import { getPaginatorButtonsNamesList } from "../../utils/constants";

const usePagination = (currentNumber: number, totalPageNumber: number) => {
    const paginatorInfo = useMemo(() => {
        const paginatorItemsList: TPaginatorItemsList = getPaginatorButtonsNamesList(currentNumber, totalPageNumber); 
        const buttonsDisable: IButtonsDisable = {
            previousPage: currentNumber === 1,
            nexPage: currentNumber === totalPageNumber,
        }
        const navigationState: INavigationState = {
            currentPageNumber: currentNumber,
            totalPageNumber: totalPageNumber
        }

        return {
            paginatorItemsList,
            buttonsDisable,
            navigationState
        }
    }, [currentNumber, totalPageNumber])

    return paginatorInfo;
}

export default usePagination;