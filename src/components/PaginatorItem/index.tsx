import { type ReactElement } from "react";
import { type IPaginatorItem } from "@utils/constants";
import "./style.css";

export interface IPaginatorItemProps {
    data: IPaginatorItem;
    onClick: () => void;
}

const PaginatorItem = ({
    data,
    onClick,
}: IPaginatorItemProps): ReactElement => {
    return !data.isButton ? (
        <div className="paginator-some-pages-symbol">{data.info}</div>
    ) : (
        <button
            className={`paginator-button ${data.selectClass}`}
            onClick={onClick}
        >
            {data.info}
        </button>
    );
};

export default PaginatorItem;
