import Paginator from "../../components/Paginator";
import Posts from "../../components/Posts";
import Search from "../../components/Search";
import useListFilter from "../../hooks/useListFilter";
import { useEffect, useState, type ReactElement } from "react";
import { TPosts } from "../../types";
import { getPosts } from "../../api";
import {
    DEFAULT_PAGE_NUMBER,
    getListShowPath,
    getTotalPageCount,
    PAGE_POSTS_COUNT,
} from "../../utils/constants";
import "./style.css";

const PostsPage = (): ReactElement => {
    const [postsList, setPostsList] = useState<TPosts>([]);
    const [currentNumber, setPageNumber] =
        useState<number>(DEFAULT_PAGE_NUMBER);
    const [query, setQuery] = useState<string>("");

    const { filteredList, setFilteredList, updateFilteredList } = useListFilter(
        postsList,
        query
    );

    const [arePostsLoading, setArePostsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const loadPosts = async () => {
        try {
            setError(null);
            setArePostsLoading(true);

            const postsData = await getPosts();

            if (!Array.isArray(postsData)) {
                throw new Error("Unable to read as array data");
            }

            setPostsList(postsData);
            setFilteredList(postsData);
        } catch (error) {
            setError(error);
        } finally {
            setArePostsLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    if (arePostsLoading) {
        return <h2>LOADING POSTS...</h2>;
    }

    if ((!arePostsLoading && !postsList?.length) || error) {
        return <h2>Unable to load posts {error?.message}</h2>;
    }

    const listShowPath: TPosts = getListShowPath(filteredList, currentNumber);
    const totalPageNumber: number = getTotalPageCount(
        filteredList,
        PAGE_POSTS_COUNT
    );

    return (
        <div className="posts-page main-container">
            <Search
                query={query}
                setQuery={setQuery}
                searchFunction={updateFilteredList}
            />
            <Paginator
                currentNumber={currentNumber}
                totalPageNumber={totalPageNumber}
                changePageNumber={setPageNumber}
            />
            <Posts postsList={listShowPath} />
        </div>
    );
};

export default PostsPage;
