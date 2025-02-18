import useNavigation from "../../hooks/useNavigation";
import useWindowResizeObserver from "../../hooks/WindowResizeObserver";
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { INavigationItem } from "../../hooks/useNavigation/meta";
import "./style.css";

export const NAVBAR_MINIMUM_DEFAULT_WINDOW_WIDTH: number = 1280;

export const enum NavigationItemClasses {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

export const enum BurgerMenuItemClasses {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

const NavigationBar = (): ReactElement => {
    const { navigationItems } = useNavigation();
    const { windowWidth } = useWindowResizeObserver();
    const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState<boolean>(false);

    const burgerMenuItemsClass: string = isBurgerMenuVisible ? BurgerMenuItemClasses.ACTIVE : BurgerMenuItemClasses.INACTIVE;

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
            <button className="burger-menu open-button" onClick={changeBurgerMenuVisible}>Open</button>
            <div className={`burger-menu navigation-items ${burgerMenuItemsClass}`}>
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
