import { type ReactElement } from "react";
import { type INavigationItem } from "@hooks/useNavigation/meta";
import "./style.css";

export interface INavigationItemsProps {
    items: INavigationItem[];
    type: string;
    goToPage: (path: string) => void;
}

export const enum NavigationItemClasses {
    ACTIVE = "active",
    INACTIVE = "inactive",
}

const NavigationItems = ({
    items,
    type,
    goToPage,
}: INavigationItemsProps): ReactElement => {
    const getItemActiveClass = (isCurrent: boolean): string => {
        return isCurrent
            ? NavigationItemClasses.ACTIVE
            : NavigationItemClasses.INACTIVE;
    };

    return (
        <div className={`navigation-items ${type}`}>
            {items.map((item: INavigationItem) => (
                <div
                    key={item.name}
                    className={`item ${getItemActiveClass(item.isCurrent)}`}
                    onClick={() => {
                        goToPage(item.path);
                    }}
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default NavigationItems;
