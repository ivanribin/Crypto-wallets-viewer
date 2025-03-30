import AsideHeader from "@components/AsideHeader";
import useWindowResizeObserver from "@hooks/WindowResizeObserver";
import NavigationBar from "@components/NavigationBar";
import { type ReactNode, type ReactElement, useState } from "react";
import "./style.css";

export const enum ContentContainerClasses {
    VISIBLE = "visible",
    HIDDEN = "hidden",
}

export const enum AsideClasses {
    OPEN = "open",
    CLOSE = "close",
}

export const enum AsideHeaderSvgIconsIds {
    BURGER_MENU_CLOSE = "burger-menu-close",
    BURGER_MENU_OPEN = "burger-menu-open",
}

export interface IDefaultLayoutProps {
    children: ReactElement | ReactNode;
}

export const NAVBAR_MINIMUM_DEFAULT_WINDOW_WIDTH: number = 1280;

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);

    const { windowWidth } = useWindowResizeObserver();

    const isBurgerNavigation: boolean =
        windowWidth < NAVBAR_MINIMUM_DEFAULT_WINDOW_WIDTH;

    const asideClass: string = !isAsideOpen
        ? AsideClasses.CLOSE
        : AsideClasses.OPEN;
    const asideHeaderIconId: string = !isAsideOpen
        ? AsideHeaderSvgIconsIds.BURGER_MENU_CLOSE
        : AsideHeaderSvgIconsIds.BURGER_MENU_OPEN;
    const contentContainerClass: string = !isAsideOpen || !isBurgerNavigation
        ? ContentContainerClasses.VISIBLE
        : ContentContainerClasses.HIDDEN;

    const changeAsideVisible = (): void => {
        setIsAsideOpen(!isAsideOpen);
    };

    const closeAside = (): void => {
        setIsAsideOpen(false);
    };

    return (
        <div className="default-layout">
            {!isBurgerNavigation ? (
                <header>
                    <NavigationBar flexDirection="row" />
                </header>
            ) : (
                <aside className={asideClass}>
                    <AsideHeader
                        iconId={asideHeaderIconId}
                        onClick={changeAsideVisible}
                    />
                    <div className="aside-content">
                        <NavigationBar flexDirection="column" />
                    </div>
                </aside>
            )}
            <div
                className={`content-container ${contentContainerClass}`}
                onClick={closeAside}
            >
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;
