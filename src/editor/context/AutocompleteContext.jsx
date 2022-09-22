import { createContext } from "react";

export const AutocompleteContext = createContext();
export function AutocompleteContextProvider(props) {
    const math = [
        {
            "name": "avg",
            "desc": "Calculates de average value from a collection of data",
        },
        {
            "name": "std",
            "desc": "Calculates de standard deviation from a collection of data",
        },
        {
            "name": "sum",
            "desc": "Calculates de total sum of a collection of data",
        },
    ];

    const data = [""];
    const ctrl = [""];
    const view = [""];

    return (
        <AutocompleteContext.Provider value={({math, data, ctrl, view})}>
            {props.children}
        </AutocompleteContext.Provider>
    )
}