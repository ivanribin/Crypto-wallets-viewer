import { type ReactElement } from "react";
import "./style.css";
import { IDisable, INavigationState } from "../../types";
import { PaginatorButtonsTexts } from "../../utils/constants";

export interface IPaginationProps {
    onPreviousPageClick: () => void;
    onNextPageClick: () => void;
    disable: IDisable;
    navigationState: INavigationState;
}

const Paginator = ({
    onPreviousPageClick,
    onNextPageClick,
    disable,
    navigationState,
}: IPaginationProps): ReactElement => {
    return (
        <div className="paginator">
            <button className="paginator-button" onClick={onPreviousPageClick} disabled={disable.previousPageButton}>
                {PaginatorButtonsTexts.PREVIOUS_PAGE}
            </button>

            {navigationState ? (
                <span className="navigator-span">
                    {navigationState.currentPageNumber} / {navigationState.totalPageNumber}
                </span>
            ) : (
                <></>
            )}

            <button className="paginator-button" onClick={onNextPageClick} disabled={disable.nextPageButton}>
                {PaginatorButtonsTexts.NEXT_PAGE}
            </button>
        </div>
    );
};

export default Paginator;
