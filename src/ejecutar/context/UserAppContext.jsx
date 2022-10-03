import { useState, createContext, useEffect } from "react";
import VPlacer from "../components/VPlacer";
import VTitle from "../components/VTitle";
import VInput from "../components/VInput";
import VButton from "../components/VButton";
import VNote from "../components/VNote";
import VLabel from "../components/VLabel";
import { viewParse } from "../utils/viewParse";

export const UserAppContext = createContext();
export function UserAppContextProvider(props) {
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
    const test = [
        [<VPlacer width={"full"}>
            <VTitle text={"Insert title"}/>
        </VPlacer>],
        [<VPlacer width={"3/5"}>
            <VInput cell={"B0"}/>
        </VPlacer>,
        <VPlacer width={"1/3"}>
            <VButton text={"Click!"}/>
        </VPlacer>,],
        [<VPlacer width={"3/5"}>
            <VNote text={"Lorem ipsum and any other stuff that may appear in a paragraph."}/>
        </VPlacer>,
        <VPlacer width={"1/3"}>
            <VLabel cell={"A0"}/>
        </VPlacer>,],
    ];

    const [ sheetData, setSheetData ] = useState(sheet);
    const [ userApp, setUserApp ] = useState(test);

    const changeValOf = (cell) => {
        let oldData = [...sheetData];
        oldData.forEach((element, index) => {
            if (element.ref === cell.ref) {
                oldData.splice(index, 1);
            }
        });
        let newData = [...oldData, cell];
        setSheetData(newData);
    };

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('sheetData'));
        if (localData) {
            setSheetData(localData);
        }
    }, []);
    useEffect(() => {
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            let viewList = [];
            let locList = [];
            let [ mx, my ] = [ 0, 0 ]
            sheetData.forEach((saved) => {
                if (saved.cell.cls === "view") {
                    let parsed = viewParse(saved.cell.cont.slice(1), saved.ref);
                    console.log(parsed.comp);
                    if (parsed.type === "error") {
                        props.children = [...props.children, parsed.comp];
                    } else {
                        viewList = [...viewList, parsed.comp];
                        locList = [...locList, [...parsed.loc]];
                        if (parsed.loc[0] > mx) {
                            mx = parsed.loc[0];
                        }
                        if (parsed.loc[1] > my) {
                            my = parsed.loc[1];
                        }
                    }
                }
            })
            let viewMatrix = [...Array(mx).keys()].map(() => {
                return ([...Array(my).keys()].map(() => {
                    return <></>;
                }));
            });
            locList.forEach((pos, idx) => {
                viewMatrix[pos[0]][pos[1]] = viewList[idx];
            });
            setUserApp(viewMatrix);
        }
        wait();
    }, [sheetData]);

    return (
        <UserAppContext.Provider value={({userApp, sheetData, changeValOf})}>
            {props.children}
        </UserAppContext.Provider>
    )
}