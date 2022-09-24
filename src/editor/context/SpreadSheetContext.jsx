import { createContext, useState } from "react";

export const SpreadSheetContext = createContext();
export function SpreadSheetContextProvider(props) {
    const sheet = [
        {
            "ref": "B2",
            "cell": {
                "cls": "Basic",
                "type": "String",
                "cont": "Hello World!",
            },
            "display": () => `${this.cell.cont}`,
            "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
        },
    ];

    const [sheetDim, setSheetDim] = useState([6, 8]);
    const [sheetData, setSheetData] = useState(sheet);

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
        newValues.forEach((element, index) => {
            if (element.ref === id) {
                newValues.splice(index, 1);
            }
        });
        setSheetData(newValues);
    };

    return (
        <SpreadSheetContext.Provider value={({
            sheetDim,
            sheetData,
            setDim,
            addDim,
            setVal,
            remVal,
        })}>
            {props.children}
        </SpreadSheetContext.Provider>
    )
}