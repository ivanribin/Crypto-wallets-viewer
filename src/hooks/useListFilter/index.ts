import LocalStorageService from "@services/LocalStorageService";
import { getPosts } from "@api/index";
import { setIsLoading } from "@store/slices/Application";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_PAGE_NUMBER, getListShowPath, getTotalPageCount } from "@utils/constants";
import { LocalStorageKeys, CountsLoadPostsKeys, countsLoadPostsValuesMap } from "@store/slices/Application/meta";
import { type TPosts } from "@components/Posts/meta";
import { type TRootState } from "@store/index";

const POSTS_DATA_SESSION_STORAGE_KEY: string = "postsData";

const getInitialQueryFromLocalStorage = (): string => {
    const localQuery = LocalStorageService.getLocalStorageRecord(LocalStorageKeys.POSTS_QUERY);

    return localQuery ?? "";
}

const getInitialPostsFromSessionStorage = (): TPosts => {
    const sessionPostsData = sessionStorage.getItem(POSTS_DATA_SESSION_STORAGE_KEY);

    if (!sessionPostsData) {
        return [];
    }

    return JSON.parse(sessionPostsData);
}

const useListFilter = () => {
    const dispatch = useDispatch();

    const [query, setQuery] = useState<string>(getInitialQueryFromLocalStorage());
    const [filteredList, setFilteredList] = useState<TPosts>(getInitialPostsFromSessionStorage());
    const [pageNumber, setPageNumber] =
        useState<number>(DEFAULT_PAGE_NUMBER);

    const [loadError, setLoadError] = useState<any>(null);

    const loadPostsCountKey = useSelector(
        (state: TRootState) => state.application.loadPostsCount
    ) as CountsLoadPostsKeys;
    const loadPostsCount = countsLoadPostsValuesMap[loadPostsCountKey];

    const listShowPath: TPosts = getListShowPath(
        filteredList,
        pageNumber,
        loadPostsCount
    );
    const totalPageNumber: number = getTotalPageCount(
        filteredList,
        loadPostsCount
    );

    const updateQuery = (newQuery: string): void => {
        setQuery(newQuery);

        LocalStorageService.setLocalStorageRecord(LocalStorageKeys.POSTS_QUERY, newQuery);
    }

    const updateFilteredList = (postsList: TPosts): void => {
        const updatedList: TPosts = [];
        const itemsAllTextLists = postsList.map((item) => Object.values(item).map((value) => String(value)));

        itemsAllTextLists.forEach((itemAllTextList, itemIndex) => {
            if (itemAllTextList.some((text) => text.includes(query))) {
                updatedList.push(postsList[itemIndex]);
            }
        });

        setFilteredList(updatedList);
        sessionStorage.setItem(POSTS_DATA_SESSION_STORAGE_KEY, JSON.stringify(updatedList));

        setPageNumber(DEFAULT_PAGE_NUMBER);
    }

    const loadPostsBySearch = async () => {
        try {
            setLoadError(null);
            dispatch(setIsLoading(true));

            const postsData = await getPosts();

            if (!Array.isArray(postsData)) {
                throw new Error("Unable to read as array data");
            }

            updateFilteredList(postsData);
        } catch (error) {
            setLoadError(error);
        } finally {
            dispatch(setIsLoading(false));
        }
    }

    return { query, updateQuery, listShowPath, totalPageNumber, pageNumber, setPageNumber, loadPostsBySearch };
}

export default useListFilter;