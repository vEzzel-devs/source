import { useState, createContext, useEffect, useRef } from "react";
import VPlacer from "../components/VPlacer";
import VTitle from "../components/VTitle";
import VInput from "../components/VInput";
import VButton from "../components/VButton";
import VParagraph from "../components/VParagraph";
import VLabel from "../components/VLabel";

export const UserAppContext = createContext();
export function UserAppContextProvider(props) {
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
    const refs = {
        "A0" : useRef(),
        "B0" : useRef(),
        "C0" : useRef(),
    };
    const test = [
        [<VPlacer width={"1/2"}>
            <VTitle inRef={refs["B0"]} text={"Insert title"}/>
        </VPlacer>],
        [<VPlacer width={"3/5"}>
            <VInput inRef={refs["C0"]} filter={()=>{}} callback={()=>{}} text={"Sample input"}/>
        </VPlacer>,
        <VPlacer width={"1/3"}>
            <VButton click={()=>{}} text={"Click!"}/>
        </VPlacer>,],
        [<VPlacer width={"3/5"}>
            <VParagraph inRef={refs["D0"]} text={"Lorem ipsum and any other stuff that may appear in a paragraph."}/>
        </VPlacer>,
        <VPlacer width={"1/3"}>
            <VLabel cell={"A0"}/>
        </VPlacer>,],
    ];

    const [ sheetData, setSheetData ] = useState(sheet);
    const [ references, setReferences ] = useState(refs);
    const [ userApp, setUserApp ] = useState(test);

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
        <UserAppContext.Provider value={({userApp, sheetData})}>
            {props.children}
        </UserAppContext.Provider>
    )
}