import { useLocation } from "react-router";
import { BasePaths, PathsTitles } from "@router/routes";
import { type INavigationItem } from "./meta";

const useNavigation = () => {
    const location = useLocation();

    const pathsLinksList = Object.values(BasePaths);
    const pathsTitlesList = Object.values(PathsTitles);

    const currentPagePathLink = location.pathname;

    const navigationItems: INavigationItem[] = pathsTitlesList.map((pathTitle, index) => {
        const navigationItem: INavigationItem = {
            name: pathTitle,
            path: pathsLinksList[index],
            isCurrent: pathsLinksList[index] === currentPagePathLink,
        };

        return navigationItem;
    })

    return {
        navigationItems
    }
}

export default useNavigation;