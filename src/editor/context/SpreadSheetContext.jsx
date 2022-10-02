import { createContext, useState, useEffect, useRef } from "react";

export const SpreadSheetContext = createContext();
export function SpreadSheetContextProvider(props) {
    const sheet = [
        {
            "ref": "A0",
            "cell": {
                "cls": "Debug",
                "type": "None",
                "cont": "Hello World!",
            },
            "display": () => `${this.cell.cont}`,
            "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
        },
    ];
    const dim = [6, 8];

    const [sheetDim, setSheetDim] = useState(dim);
    const [sheetData, setSheetData] = useState(sheet);
    const [selectedCell, setSelectedCell] = useState(null);
    const inputBar = useRef();

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

    useEffect(() => {
        let localDim = JSON.parse(localStorage.getItem('sheetDim'));
        if (localDim) {
            console.log(localDim);
            setSheetDim(localDim);
        }
        let localData = JSON.parse(localStorage.getItem('sheetData'));
        if (localData) {
            setSheetData(localData);
        }
    }, []);
    useEffect(() => {
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            localStorage.setItem('sheetDim', JSON.stringify(sheetDim));
        }
        wait();
    }, [sheetDim]);
    useEffect(() => {
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            localStorage.setItem('sheetData', JSON.stringify(sheetData));
        }
        wait();
    }, [sheetData]);

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