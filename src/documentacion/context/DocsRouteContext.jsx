import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { DocsDataContext } from "./DocsDataContext";

export const DocsRouteContext = createContext();
export function DocsRouteContextProvider(props) {
    const data = useContext(DocsDataContext);
    const topics = Object.keys(data);
    let current = data[topics[0]];
    const [ active, setActive ] = useState(0);
    const [ section, setSection ] = useState(current);
    const [ nav, setNav ] = useState(current.map(e => e.title));

    useEffect(() => {
        let current = data[topics[active]];
        setSection(current)
        setNav(current.map(e => e.title))
    }, [ active ]);

    return (
        <DocsRouteContext.Provider value={({ topics, active, setActive, section, nav })}>
            {props.children}
        </DocsRouteContext.Provider>
    )
}