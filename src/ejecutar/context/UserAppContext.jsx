import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";

import VContainer from "../lang/VContainer";
import VInput from "../lang/VInput";
import VButton from "../lang/VButton";
import VText from "../lang/VText";
import VLabel from "../lang/VLabel";
import { start_language } from "../lang/main.js";

export const UserAppContext = createContext();
export function UserAppContextProvider(props) {
    const { sheetData } = useContext(SpreadSheetContext);
    const [ runtime, setRuntime ] = useState([]);
    const [ userApp, setUserApp ] = useState([]);

    const createRuntime = (data, deps) => {
        if (data != runtime) {
          //setRuntime(data);
          let lang = start_language();
          console.log(lang.get_all_deps(data))
        }
    };
    useEffect(() => {
      createRuntime(sheetData)
    }, [ sheetData ]);
    const changeCell = (cell) => {
      const values = [...runtime];
        let notFound = true;
        let newValues = values.map((element) => {
            if (element.ref === cell.ref) {
                notFound = false;
                return cell;
            }
            return element;
        });
        if (notFound) {
            newValues = [...values, cell];
        }
        setRuntime(newValues);
    };

    const createApp = (data) => {
        {/*
          * Detect the view cells, also the "place" ones
          * with those build the array of user's app
          ********************************************/}
        return;
    };

    return (
        <UserAppContext.Provider value={({runtime, userApp, changeCell})}>
            {props.children}
        </UserAppContext.Provider>
    )
}