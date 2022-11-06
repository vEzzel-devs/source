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
    // if it is for user comment checking, then it must change its name!
    const [ reload, setReload ] = useState(false); 

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

    const logout = () => {
        let theme = localStorage.getItem("theme");
        localStorage.clear()
        localStorage.setItem("theme", theme);
        setLogged(false);
    };

    return (
        <SystemContext.Provider value={({
            allTags,
            logged,
            loading,
            reload,
            setLogged,
            setLoading,
            logout,
            setReload
        })}>
            {props.children}
        </SystemContext.Provider>
    )
}