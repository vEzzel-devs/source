import { createContext } from "react";
import { useState, useEffect } from "react";

export const SystemContext = createContext();
export function SystemContextProvider(props) {

    const allTags = [
        "tag1",
        "tag2",
        "tag3",
        "tag4",
        "tag5",
        "tag6",
    ];

    const [ loading, setLoading ] = useState(false);
    const toggleLoading = () => {
        setLoading(!loading);
    }

    let logged, setLogged;
    let localLogged = JSON.parse(localStorage.getItem('logged'));

    if (localLogged) {
        [ logged, setLogged ] = useState(true);
    } else {
        [ logged, setLogged ] = useState(false);
    }
    
    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged]);

    return (
        <SystemContext.Provider value={({ allTags, logged, loading, setLogged, toggleLoading })}>
            {props.children}
        </SystemContext.Provider>
    )
}