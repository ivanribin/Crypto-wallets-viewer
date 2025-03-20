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

    function isString(variable: any): variable is string {
        return typeof variable === "string";
    }

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
                {paginatorItemsList.map((item, index) =>
                    !item.isButton ? (
                        <div
                            key={index}
                            className="paginator-some-pages-symbol"
                        >
                            {item.info}
                        </div>
                    ) : (
                        <button
                            key={index}
                            className={`paginator-button ${item.selectClass}`}
                            onClick={() => changePageNumber(Number(item.info))}
                        >
                            {item.info}
                        </button>
                    )
                )}
            </div>

            <div>
                <button
                    className="paginator-arrow"
                    onClick={setNextPage}
                    disabled={buttonsDisable.nexPage}
                >
                    {PaginatorFieldsTexts.NEXT_PAGE_SYMBOl}
                </button>
            </div>
        </div>
    );
};

export default Paginator;
