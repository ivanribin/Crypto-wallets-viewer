import Paginator from "@components/Paginator";
import Posts from "@components/Posts";
import Search from "@components/Search";
import useListFilter from "@hooks/useListFilter";
import { useEffect, type ReactElement } from "react";
import "./style.css";

const PostsPage = (): ReactElement => {
    const {
        query,
        setQuery,
        pageNumber,
        setPageNumber,
        totalPageNumber,
        listShowPath,
        updateFilteredList,
        loadPosts,
    } = useListFilter();

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div className="posts-page main-container">
            <Search
                query={query}
                setQuery={setQuery}
                searchFunction={updateFilteredList}
            />
            <Paginator
                currentNumber={pageNumber}
                totalPageNumber={totalPageNumber}
                changePageNumber={setPageNumber}
            />
            <Posts postsList={listShowPath} />
        </div>
    );
};

export default PostsPage;
