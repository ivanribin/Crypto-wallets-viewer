import { useLocation } from "react-router";
import { BasePaths, PagesIds } from "../../router/routes";
import { INavigationItem } from "../../types";

const useNavigation = () => {
    const location = useLocation();

    const pathsList = Object.values(BasePaths);
    const pagesIdsList = Object.values(PagesIds);

    const currentPagePath = location.pathname;

    const navigationItems: INavigationItem[] = pagesIdsList.map((pageId, index) => {
        const navigationItem: INavigationItem = {
            name: pageId,
            path: pathsList[index],
            isCurrent: pathsList[index] === currentPagePath,
        };

        return navigationItem;
    })

    return {
        navigationItems
    }
}

export default useNavigation;