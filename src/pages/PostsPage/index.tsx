import Paginator from "@components/Paginator";
import Posts from "@components/Posts";
import useListFilter from "@hooks/useListFilter";
import SearchBlock from "@components/SearchBlock";
import { type ReactElement } from "react";
import "./style.css";

const PostsPage = (): ReactElement => {
    const {
        query,
        updateQuery,
        pageNumber,
        setPageNumber,
        totalPageNumber,
        listShowPath,
        loadPostsBySearch,
    } = useListFilter();

    return (
        <div className="posts-page">
            <SearchBlock
                query={query}
                setQuery={updateQuery}
                loadPostsBySearch={loadPostsBySearch}
            />
            {listShowPath.length !== 0 && (
                <Paginator
                    currentNumber={pageNumber}
                    totalPageNumber={totalPageNumber}
                    changePageNumber={setPageNumber}
                />
            )}
            <Posts postsList={listShowPath} />
        </div>
    );
};

export default PostsPage;
