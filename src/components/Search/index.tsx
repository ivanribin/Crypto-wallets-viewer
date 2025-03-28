import {
    Dispatch,
    ReactElement,
    SetStateAction,
    ChangeEvent,
    useState,
} from "react";
import "./style.css";

export interface ISearchProps {
    setQuery: Dispatch<SetStateAction<string>>;
}

const Search = ({ setQuery }: ISearchProps): ReactElement => {
    const [input, setInput] = useState<string>("");

    const handleQueryChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setQuery(event.target.value);
        setInput(event.target.value);
    };

    return (
            <input
                type="text"
                id="url"
                value={input}
                onChange={handleQueryChange}
                placeholder={"Search"}
                required
            />
    );
};

export default Search;
