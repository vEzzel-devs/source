import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";

import VContainer from "../lang/VContainer";
import VInput from "../lang/VInput";
import VButton from "../lang/VButton";
import VText from "../lang/VText";
import VLabel from "../lang/VLabel";
import * as lang from "../lang/parser.js";

export const UserAppContext = createContext();
export function UserAppContextProvider(props) {
    const { sheetData } = useContext(SpreadSheetContext)
    const [ runtime, setRuntime ] = useState([]);
    const [ userApp, setUserApp ] = useState([]);

    const createRuntime = (data) => {
        {/*
          * Make a nice copy of sheetData to work with
          * also add any other stuff needed to itself
          ********************************************/}
        return;
    };

    const parseDependences = (data) => {
        {/*
          * Detect the dependences from every cell, so
          * it can set an order to build the scope
          ********************************************/}
        return;
    };

    const createApp = (data) => {
        {/*
          * Detect the view cells, also the "place" ones
          * with those build the array of user's app
          ********************************************/}
        return;
    };

    return (
        <UserAppContext.Provider value={({runtime, userApp})}>
            {props.children}
        </UserAppContext.Provider>
    )
}