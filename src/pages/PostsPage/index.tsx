import { useEffect, useState, type ReactElement } from "react";
import { TPosts } from "../../types";
import { getPosts } from "../../api";
import usePaginationObserver from "../../hooks/usePaginationObserver";
import Paginator from "../../components/Paginator";
import "./style.css";

const PostsPage = (): ReactElement => {
    const [postsList, setPostsList] = useState<TPosts | null>(null);
    const [arePostsLoading, setArePostsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);

    const {
        showList,
        setPreviousPage,
        setNextPage,
        paginatorDisable,
        navigationState,
    } = usePaginationObserver(postsList);

    const loadPosts = async () => {
        try {
            setError(null);
            setArePostsLoading(true);

            const postsData = await getPosts();

            if (!Array.isArray(postsData)) {
                throw new Error("Unable to read as array data");
            }

            setPostsList(postsData);
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

    return (
        <div className="posts-page main-container">
            <div>{JSON.stringify(showList)}</div>

            <Paginator
                onPreviousPageClick={setPreviousPage}
                onNextPageClick={setNextPage}
                disable={paginatorDisable}
                navigationState={navigationState}
            />
        </div>
    );
};

export default PostsPage;
