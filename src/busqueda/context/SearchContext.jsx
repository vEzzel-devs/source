import { useState, createContext } from "react";

export const SearchContext = createContext();
export function SearchContextProvider(props) {
    const [ results, setResults ] = useState([]);
    const [ searching, setSearching ] = useState(false);

    const banned = ["durante", "según", "segun", "ante", "en", "sin", "sín", "bajo", "entre", "so", "cabe", "hacia", "sobre", "con", "hasta", "tras", "contra", "mediante", "versus", "de", "para", "vía", "via", "desde", "por", "yo", "me", "mí", "mi", "nos", "nosotras", "nosotros", "conmigo", "te", "ti", "tú", "tu", "os", "usted", "ustedes", "vos", "vosotras", "vosotros", "contigo", "él", "el", "ella", "ellas", "ello", "ellos", "la", "las", "lo", "los", "le", "les", "se", "sí", "si", "no", "consigo"];
    const [ detect, setDetect ] = useState([""]);

    const rankText = (text) => {
        let p = text.replaceAll(" ", "_").replaceAll("\n", "_");
        p = p.replace(/\W/g, '').toLowerCase();
        let arr = p.split("_").filter((s) => !banned.includes(s));
        let acc = 0;
        let oldDetection = [...detect];
        oldDetection?.forEach((r) => {
            if (r.length < 2) {
                acc += (p.includes(r) ? 1 : 0);
            } else {
                acc += (arr.includes(r) ? 1 : 0);
            }
        });
        return acc;
    }

    return (
        <SearchContext.Provider value={({ results, detect, searching, setSearching, setResults, setDetect, rankText })}>
            {props.children}
        </SearchContext.Provider>
    )
}