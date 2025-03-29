import { type ReactElement } from "react";
import "./style.css";

const SVG_SPRITE_SRC_PREFIX: string = "/assets/images/sprite.svg#";

export interface IAsideHeaderProps {
    iconId: string;
    onClick: () => void;
}

const ASIDE_HEADER_SIZE: string = "50px";

const AsideHeader = ({ iconId, onClick }: IAsideHeaderProps): ReactElement => (
    <div
        className="aside-header"
        style={{ width: ASIDE_HEADER_SIZE, height: ASIDE_HEADER_SIZE }}
        onClick={onClick}
    >
        <svg>
            <use
                href={`${SVG_SPRITE_SRC_PREFIX}${iconId}`}
                width={ASIDE_HEADER_SIZE}
            ></use>
        </svg>
    </div>
);

export default AsideHeader;
