import PaginatorItem from "@components/PaginatorItem";
import usePagination from "@hooks/usePagination";
import { Dispatch, SetStateAction, type ReactElement } from "react";
import { PaginatorFieldsTexts } from "@utils/constants";
import "./style.css";

export interface IPaginatorProps {
    currentNumber: number;
    totalPageNumber: number;
    changePageNumber: Dispatch<SetStateAction<number>>;
}

const Paginator = ({
    currentNumber,
    totalPageNumber,
    changePageNumber,
}: IPaginatorProps): ReactElement => {
    const { paginatorItemsList, buttonsDisable } = usePagination(
        currentNumber,
        totalPageNumber
    );

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
            <div>
                <button
                    className="paginator-arrow"
                    onClick={setPreviousPage}
                    disabled={buttonsDisable.previousPage}
                >
                    {PaginatorFieldsTexts.PREVIOUS_PAGE_SYMBOL}
                </button>
            </div>

            <div className="paginator-items">
                {paginatorItemsList.map((itemData, index) => (
                    <PaginatorItem
                        key={index}
                        data={itemData}
                        onClick={() => changePageNumber(Number(itemData.info))}
                    />
                ))}
            </div>

            <div>
                <button
                    className="paginator-arrow"
                    onClick={setNextPage}
                    disabled={buttonsDisable.nextPage}
                >
                    {PaginatorFieldsTexts.NEXT_PAGE_SYMBOl}
                </button>
            </div>
        </div>
    );
};

export default Paginator;
