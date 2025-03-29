import useNavigation from "@hooks/useNavigation";
import useWindowResizeObserver from "@hooks/WindowResizeObserver";
import NavigationItems from "@components/NavigationItems";
import { useNavigate } from "react-router-dom";
import { SelectButtonStyles } from "@utils/constants";
import { type ReactElement, useState } from "react";

export const NAVBAR_MINIMUM_DEFAULT_WINDOW_WIDTH: number = 1280;

export const enum NavigationItemsClasses {
    DEFAULT = "default",
    BURGER = "burger",
}

const NavigationBar = (): ReactElement => {
    const navigate = useNavigate();

    const { navigationItems } = useNavigation();
    const { windowWidth } = useWindowResizeObserver();
    const [isItemsVisible, setIsItemsVisible] = useState<boolean>(false);

    const isBurgerType: boolean =
        windowWidth < NAVBAR_MINIMUM_DEFAULT_WINDOW_WIDTH;

    const changeItemsVisible = (): void => {
        setIsItemsVisible(!isItemsVisible);
    };

    const goToPage = (path: string): void => {
        navigate(path);
    };

    const getItemsClass = (): string => {
        return isBurgerType
            ? NavigationItemsClasses.BURGER
            : NavigationItemsClasses.DEFAULT;
    };

    const getOpenButtonClass = (): string => {
        return isItemsVisible
            ? SelectButtonStyles.SELECT
            : SelectButtonStyles.UNSELECT;
    };

    return (
        <div className="navigation-bar">
            {isBurgerType && (
                <button
                    className={`open-button ${getOpenButtonClass()}`}
                    title={"Open"}
                    onClick={changeItemsVisible}
                >
                    Open
                </button>
            )}
            {(isItemsVisible || !isBurgerType) && (
                <NavigationItems
                    items={navigationItems}
                    type={getItemsClass()}
                    goToPage={goToPage}
                />
            )}
        </div>
    );
};

export default NavigationBar;
