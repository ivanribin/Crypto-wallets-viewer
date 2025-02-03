import useNavigation from "../../hooks/useNavigation";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { INavigationItem } from "../../types";
import "./style.css";

export const enum NavigationItemClasses {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

const NavigationBar = (): ReactElement => {
    const { navigationItems } = useNavigation();

    return (
        <div className="navigation-bar">
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
    );
};

export default NavigationBar;
