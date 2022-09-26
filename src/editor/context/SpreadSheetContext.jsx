import { createContext, useState, useRef } from "react";

export const SpreadSheetContext = createContext();
export function SpreadSheetContextProvider(props) {
    const [sheetDim, setSheetDim] = useState([6, 8]);
    const [selectedCell, setSelectedCell] = useState(null);
    const inputBar = useRef();
    const [sheetData, setSheetData] = useState([
        {
            "ref": "A0",
            "cont": "Hello World!",
        },
    ]);

    const setDim = (cols, rows) => {
        let current = [sheetDim[0], sheetDim[1]];
        if (cols != current[0] || rows != current[1]) {
            setSheetDim([
                    cols ? cols : current[0],
                    rows ? rows : current[1],
                ]);
        }
    };
    const addDim = (cols, rows) => {
        let current = [sheetDim[0], sheetDim[1]];
        cols = cols ? cols : 0;
        rows = rows ? rows : 0;
        console.log(current, cols, rows)
        setDim(cols+current[0], rows+current[1])
    };

    const setVal = (id, value) => {
        const actualValues = [...sheetData];
        let notFound = true;
        let newValues = actualValues.map((element) => {
            if (element.ref === id) {
                notFound = false;
                return value;
            }
            return element;
        });
        if (notFound) {
            newValues = [...actualValues, value];
        }
        setSheetData(newValues);
    };
    const remVal = (id) => {
        const newValues = [...sheetData];
        let found = false;
        newValues.forEach((element, index) => {
            if (element.ref === id) {
                found = true;
                newValues.splice(index, 1);
            }
        });
        if (found) {
            setSheetData(newValues);
        }
    };

    return (
        <SpreadSheetContext.Provider value={({
            sheetDim,
            sheetData,
            selectedCell,
            inputBar,
            setDim,
            addDim,
            setVal,
            remVal,
            setSelectedCell,
        })}>
            {props.children}
        </SpreadSheetContext.Provider>
    )
}