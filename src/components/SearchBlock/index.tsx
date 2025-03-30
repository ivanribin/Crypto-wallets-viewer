import { LOAD_BUTTON_TEXT, SEARCH_INPUT_PLACEHOLDER_TEXT } from "./meta";
import { type ReactElement, type ChangeEvent } from "react";
import "./style.css";

export interface ISearchProps {
    query: string;
    setQuery: (newQuery: string) => void;
    loadPostsBySearch: () => void;
}

const MAX_SEARCH_LENGTH: number = 20;

const SearchBlock = ({
    query,
    setQuery,
    loadPostsBySearch,
}: ISearchProps): ReactElement => {
    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value);
    };

    return (
        <div className="search-block">
            <input
                type="text"
                id="posts-search"
                value={query}
                maxLength={MAX_SEARCH_LENGTH}
                onChange={handleQueryChange}
                placeholder={SEARCH_INPUT_PLACEHOLDER_TEXT}
                required
            />
            <button className="load" onClick={loadPostsBySearch}>
                {LOAD_BUTTON_TEXT}
            </button>
        </div>
    );
};

export default SearchBlock;
