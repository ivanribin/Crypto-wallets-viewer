import PaginatorItem from "@components/PaginatorItem";
import usePagination from "@hooks/usePagination";
import useWindowResizeObserver from "@hooks/WindowResizeObserver";
import { Dispatch, SetStateAction, type ReactElement } from "react";
import { PaginatorFieldsTexts } from "@utils/constants";
import "./style.css";

export interface IPaginatorProps {
    currentNumber: number;
    totalPageNumber: number;
    changePageNumber: Dispatch<SetStateAction<number>>;
}

const PAGINATOR_ITEMS_VISIBLE_MINIMUM_WINDOW_WIDTH: number = 1000;

const Paginator = ({
    currentNumber,
    totalPageNumber,
    changePageNumber,
}: IPaginatorProps): ReactElement => {
    const { paginatorItemsList, buttonsDisable } = usePagination(
        currentNumber,
        totalPageNumber
    );
    const { windowWidth } = useWindowResizeObserver();

    const isMobileDevice: boolean =
        windowWidth < PAGINATOR_ITEMS_VISIBLE_MINIMUM_WINDOW_WIDTH;

    const setPreviousPage = (): void => {
        const currentPageNumber = currentNumber;
        const previousPageNumber = currentPageNumber - 1;

        changePageNumber(
            previousPageNumber > 0 ? previousPageNumber : currentPageNumber
        );
    };

    const setNextPage = (): void => {
        const currentPageNumber = currentNumber;
        const nextPageNumber = currentPageNumber + 1;

        changePageNumber(
            nextPageNumber <= totalPageNumber
                ? nextPageNumber
                : currentPageNumber
        );
    };

    return (
        <div className="paginator">
            <button
                className="arrow paginator-button"
                title={PaginatorFieldsTexts.PREVIOUS_PAGE_SYMBOL}
                onClick={setPreviousPage}
                disabled={buttonsDisable.previousPage}
            >
                {PaginatorFieldsTexts.PREVIOUS_PAGE_SYMBOL}
            </button>

            {!isMobileDevice && (
                <div className="items-container">
                    {paginatorItemsList.map((itemData, index) => (
                        <PaginatorItem
                            key={index}
                            data={itemData}
                            onClick={() =>
                                changePageNumber(Number(itemData.info))
                            }
                        />
                    ))}
                </div>
            )}

            <button
                className="arrow paginator-button"
                title={PaginatorFieldsTexts.NEXT_PAGE_SYMBOl}
                onClick={setNextPage}
                disabled={buttonsDisable.nextPage}
            >
                {PaginatorFieldsTexts.NEXT_PAGE_SYMBOl}
            </button>
        </div>
    );
};

export default Paginator;
