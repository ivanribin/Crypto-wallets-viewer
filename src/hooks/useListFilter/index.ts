import { getPosts } from "@api/index";
import { setIsLoading } from "@store/slices/Application";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_PAGE_NUMBER, getListShowPath, getTotalPageCount } from "@utils/constants";
import { CountsLoadPostsKeys, countsLoadPostsValuesMap } from "@store/slices/Application/meta";
import { type TPosts } from "@components/Posts/meta";
import { type TRootState } from "@store/index";

const useListFilter = () => {
    const dispatch = useDispatch();

    const [postsList, setPostsList] = useState<TPosts>([]);
    const [filteredList, setFilteredList] = useState<TPosts>([]);

    const [query, setQuery] = useState<string>("");

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

    useEffect(() => {
        loadPosts();
    }, []);

    useEffect(() => {
        updateFilteredList();
    }, [query])

    const loadPosts = async () => {
        try {
            setLoadError(null);
            dispatch(setIsLoading(true));

            const postsData = await getPosts();

            if (!Array.isArray(postsData)) {
                throw new Error("Unable to read as array data");
            }

            setPostsList(postsData);
            setFilteredList(postsData);
        } catch (error) {
            setLoadError(error);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    const updateFilteredList = (): void => {
        const updatedList: TPosts = [];
        const itemsAllTextLists = postsList.map((item) => Object.values(item).map((value) => String(value)));

        itemsAllTextLists.forEach((itemAllTextList, itemIndex) => {
            if (itemAllTextList.some((text) => text.includes(query))) {
                updatedList.push(postsList[itemIndex]);
            }
        });

        setFilteredList(updatedList);
        setPageNumber(DEFAULT_PAGE_NUMBER);
    }

    return { query, setQuery, listShowPath, totalPageNumber, pageNumber, setPageNumber, updateFilteredList, loadPosts };
}

export default useListFilter;