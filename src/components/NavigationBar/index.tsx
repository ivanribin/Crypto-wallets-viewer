import useNavigation from "@hooks/useNavigation";
import useWindowResizeObserver from "@hooks/WindowResizeObserver";
import { Link } from "react-router-dom";
import { type ReactElement, useState } from "react";
import { type INavigationItem } from "@hooks/useNavigation/meta";
import "./style.css";

export const NAVBAR_MINIMUM_DEFAULT_WINDOW_WIDTH: number = 1280;

export const enum NavigationItemClasses {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export const enum BurgerMenuItemClasses {
    DEFAULT = "default",
    OPEN = "open",
}

const NavigationBar = (): ReactElement => {
    const { navigationItems } = useNavigation();
    const { windowWidth } = useWindowResizeObserver();
    const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState<boolean>(false);

    const burgerMenuItemsClass: string = isBurgerMenuVisible ? BurgerMenuItemClasses.DEFAULT : BurgerMenuItemClasses.OPEN;

    const changeBurgerMenuVisible = (): void => {
        setIsBurgerMenuVisible(!isBurgerMenuVisible);
    }

    return windowWidth >= NAVBAR_MINIMUM_DEFAULT_WINDOW_WIDTH ? (
        <div className="navigation-bar default">
            {navigationItems.map((item: INavigationItem) => {
                const itemClass: string = item.isCurrent
                    ? NavigationItemClasses.ACTIVE
                    : NavigationItemClasses.INACTIVE;

                return (
                    <div
                        key={item.name}
                        className={`navigation-item ${itemClass}`}
                    >
                        <Link to={item.path}>{item.name}</Link>
                    </div>
                );
            })}
        </div>
    ) : (
        <div className="navigation-bar burger-menu">
            <button className="open-button" onClick={changeBurgerMenuVisible}>Open</button>
            <div className={`navigation-items ${burgerMenuItemsClass}`}>
                {navigationItems.map((item: INavigationItem) => {
                    const itemClass: string = item.isCurrent
                        ? NavigationItemClasses.ACTIVE
                        : NavigationItemClasses.INACTIVE;

                    return (
                        <div
                            key={item.name}
                            className={`navigation-item ${itemClass}`}
                        >
                            <Link to={item.path}>{item.name}</Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NavigationBar;
