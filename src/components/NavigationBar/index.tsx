import useNavigation from "@hooks/useNavigation";
import { useNavigate } from "react-router";
import { NavigationItemClasses } from "@components/NavigationItems";
import { type ReactElement } from "react";
import { type INavigationItem } from "@hooks/useNavigation/meta";
import "./style.css";

export interface INavigationBarProps {
    flexDirection: string;
}

const NavigationBar = ({flexDirection}: INavigationBarProps): ReactElement => {
    const navigate = useNavigate();

    const { navigationItems } = useNavigation();

    const goToPage = (path: string): void => {
        navigate(path);
    };

    const getItemActiveClass = (isCurrent: boolean): string => {
        return isCurrent
            ? NavigationItemClasses.ACTIVE
            : NavigationItemClasses.INACTIVE;
    };

    return (
        <div className="navigation-bar">
            <div className={`items-list ${flexDirection}`}>
                {navigationItems.map((item: INavigationItem) => (
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
        </div>
    );
};

export default NavigationBar;
