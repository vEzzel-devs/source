import { createContext } from "react";

export const AutocompleteContext = createContext();
export function AutocompleteContextProvider(props) {
    const math = [
        {
            "name": "avg",
            "desc": "Calculates de average value from a collection of data",
            "func": '{return 1}',
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
    
    function filterByName(item) {
        return item.name.substring(0, this.length) === this;
    }

    const getAC = (arrAC,str) => {
        if (arrAC === "math"){
            console.log(math.filter(filterByName,str));
        }
        else if (arrAC === "data"){
            data.filter(filterByName,str);
        }       
        else if (arrAC === "ctrl"){
            ctrl.filter(filterByName,str);
        }
        else if (arrAC === "view"){
            view.filter(filterByName,str);
        }
        else{
            console.log("base");
        }
    };
    return (
        <AutocompleteContext.Provider value={({getAC,math, data, ctrl, view})}>
            {props.children}
        </AutocompleteContext.Provider>
    )
}