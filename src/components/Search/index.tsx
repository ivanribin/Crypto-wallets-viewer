import {
    Dispatch,
    ReactElement,
    SetStateAction,
    ChangeEvent,
    useState,
} from "react";
import "./style.css";

export const BUTTON_TEXT: string = "search";

export interface ISearchProps {
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    searchFunction: () => void;
}

const Search = ({
    query,
    setQuery, 
    searchFunction,
}: ISearchProps): ReactElement => {
    const [input, setInput] = useState<string>(query);

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value);
        setInput(event.target.value);
    };

    return (
        <div className="search main-container">
            <div className="search input-form">
                <input
                    className="url-input-field"
                    type="text"
                    id="url"
                    value={input}
                    onChange={handleQueryChange}
                    placeholder={"Search"}
                    required
                />
            </div>
            <button className={`common-button`} onClick={searchFunction}>
                {BUTTON_TEXT}
            </button>
        </div>
    );
};

export default Search;
