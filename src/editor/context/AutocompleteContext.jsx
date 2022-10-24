import { createContext } from "react";

export const AutocompleteContext = createContext();
export function AutocompleteContextProvider(props) {
    const math = [
        {
            "name": "avg",
            "desc": "Calculates de average value from a collection of data",
            "func": 'avg(1,2,3...n)',
            "value": "avg( )",
        },
        {
            "name": "std",
            "desc": "Calculates de standard deviation from a collection of data",
            "func": 'std(1,2,3...n)',
            "value": "std( )",
        },
        {
            "name": "sum",
            "desc": "Calculates de total sum of a collection of data",
            "func": "sum(1,2,3...n)",
            "value": "sum( )",
        },
    ];

    const data = [
        {
            "name": "test data ",
            "desc": "test data ",
            "func": "test data ",
            "value": "test data ",
        },
    ];
    const ctrl = [
        {
            "name": "test ctrl",
            "desc": "test ctrl",
            "func": "test ctrl",
            "value": "test ctrl",
        },
    ];
    const view = [
        {
            "name": "test view",
            "desc": "test view",
            "func": "test view",
            "value": "test view",
        },
    ];
    
    function filterByName(item) {
        return item.name.substring(0, this.length) === this;
    }

    const getAC = (arrAC,str) => {
        if (arrAC === "="){
            return math.filter(filterByName,str);
        }
        else if (arrAC === "#"){
            return data.filter(filterByName,str);
        }       
        else if (arrAC === "$"){
            return ctrl.filter(filterByName,str);
        }
        else if (arrAC === "/"){
            return view.filter(filterByName,str);
        }
    };
    return (
        <AutocompleteContext.Provider value={({getAC,math, data, ctrl, view})}>
            {props.children}
        </AutocompleteContext.Provider>
    )
}