import { useState, createContext } from "react";

export const SearchContext = createContext();
export function SearchContextProvider(props) {
    const [ results, setResults ] = useState([])
    return (
        <SearchContext.Provider value={({ results, setResults })}>
            {props.children}
        </SearchContext.Provider>
    )
}