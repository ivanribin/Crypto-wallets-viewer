import Paginator from "@components/Paginator";
import Posts from "@components/Posts";
import Search from "@components/Search";
import useListFilter from "@hooks/useListFilter";
import { type ReactElement } from "react";
import "./style.css";

const PostsPage = (): ReactElement => {
    const {
        setQuery,
        pageNumber,
        setPageNumber,
        totalPageNumber,
        listShowPath,
    } = useListFilter();

    return (
        <div className="posts-page">
            <Search setQuery={setQuery} />
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
