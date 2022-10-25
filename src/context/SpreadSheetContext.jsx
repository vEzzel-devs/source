import { createContext, useState, useEffect, useRef } from "react";

export const SpreadSheetContext = createContext();
export function SpreadSheetContextProvider(props) {
    const sheet = [
        {
            "ref": "A0",
            "cell": {
                "cls": "debug",
                "type": "None",
                "cont": "Hello World!",
            },
            "display": () => `${this.cell.cont}`,
            "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
        },
    ];
    const dim = [6, 8];
    const config = {
        id: "",
        title: "",
        desc: "",
        tags: []
    };

    let sheetDim, setSheetDim;
    let sheetData, setSheetData;
    let sheetConfig, setSheetConfig;

    let localDim = JSON.parse(localStorage.getItem('sheetDim'));
    if (localDim) {
        [sheetDim, setSheetDim] = useState(localDim);
    } else {
        [sheetDim, setSheetDim] = useState(dim);
    }
    let localData = JSON.parse(localStorage.getItem('sheetData'));
    if (localData) {
        [sheetData, setSheetData] = useState(localData);
    } else {
        [sheetData, setSheetData] = useState(sheet);
    }
    let localConfig = JSON.parse(localStorage.getItem('sheetConfig'));
    if (localConfig) {
        [sheetConfig, setSheetConfig] = useState(localConfig);
    } else {
        [sheetConfig, setSheetConfig] = useState(config);
    }

    const [selectedCell, setSelectedCell] = useState(null);
    const [nextCell, setNextCell] = useState("A1");
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

    const restartSheet = () => {
        setSheetDim(dim);
        setSheetData(sheet);
        setSheetConfig(config);
    };

    useEffect(() => {
        localStorage.setItem('sheetDim', JSON.stringify(sheetDim));
    }, [sheetDim]);
    useEffect(() => {
        localStorage.setItem('sheetData', JSON.stringify(sheetData));
    }, [sheetData]);
    useEffect(() => {
        localStorage.setItem('sheetConfig', JSON.stringify(sheetConfig));
    }, [sheetConfig]);

    return (
        <SpreadSheetContext.Provider value={({
            sheetDim,
            sheetData,
            sheetConfig,
            selectedCell,
            inputBar,
            nextCell,
            setDim,
            addDim,
            setVal,
            remVal,
            restartSheet,
            setSheetDim,
            setSheetData,
            setSheetConfig,
            setNextCell,
            setSelectedCell,
        })}>
            {props.children}
        </SpreadSheetContext.Provider>
    )
}