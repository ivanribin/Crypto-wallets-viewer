import {
    Dispatch,
    ReactElement,
    SetStateAction,
    ChangeEvent,
    useState,
    useEffect,
} from "react";
import "./style.css";

export const BUTTON_TEXT: string = "search";

export interface ISearchProps {
    setQuery: Dispatch<SetStateAction<string>>;
}

const Search = ({
    setQuery,
}: ISearchProps): ReactElement => {
    const [input, setInput] = useState<string>("");

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
        </div>
    );
};

export default Search;
