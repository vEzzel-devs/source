import { useState, createContext, useEffect } from "react";

export const UserAppContext = createContext();
export function UserAppContextProvider(props) {
    const sheet = [
        {
            "ref": "A0",
            "cell": {
                "cls": "Debug",
                "type": "None",
                "cont": "",
            },
            "display": () => `${this.cell.cont}`,
            "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
        },
    ];
    const [sheetData, setSheetData] = useState(sheet);
    const [userApp, setUserApp] = useState([[<></>], [<></>]]);

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('sheetData'));
        if (localData) {
            setSheetData(localData);
        }
    }, []);
    useEffect(() => {
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            //interprete
        }
        wait();
    }, [sheetData]);

    return (
        <UserAppContext.Provider value={({userApp})}>
            {props.children}
        </UserAppContext.Provider>
    )
}