import { createContext, useState } from "react";

export const SpreadSheetContext = createContext();
export function SpreadSheetContextProvider(props) {
    const sheet = ({
        "shape": 0,
        "data": [
            {
                "ref": "A1",
                "content": "Example",
            },
        ],
    });

    const [sheetDim, setSheetDim] = useState([6, 8]);
    //const [sheetData, setSheetData] = useState(sheet.data);

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

    return (
        <SpreadSheetContext.Provider value={({
            sheetDim,
            setDim,
            addDim,
        })}>
            {props.children}
        </SpreadSheetContext.Provider>
    )
}