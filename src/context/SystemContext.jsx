import { createContext } from "react";
import { useState, useEffect } from "react";

export const SystemContext = createContext();
export function SystemContextProvider(props) {

    const allTags = [
        "Matemáticas",
        "Optimización",
        "Algoritmo",
        "vEzzel",
        "Educación",
        "Plantilla",
        "Problema",
        "Negocios",
        "Gestión",
        "Propuesta",
        "Desarrollo",
        "Soporte",
        "Misceláneo"
    ];

    const [ loading, setLoading ] = useState(false);
    let logged, setLogged;
    let localLogged = JSON.parse(localStorage.getItem('logged'));
    if (localLogged) {
        [ logged, setLogged ] = useState(true);
    } else {
        [ logged, setLogged ] = useState(false);
    }
    let times, setTimes;
    let localTimes = JSON.parse(sessionStorage.getItem('times'));
    if (localTimes) {
        [ times, setTimes ] = useState(localTimes);
    } else {
        [ times, setTimes ] = useState(0);
    }
    
    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged]);
    useEffect(() => {
        sessionStorage.setItem('times', JSON.stringify(times));
    }, [times]);

    const logout = () => {
        let theme = localStorage.getItem("theme");
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem("theme", theme);
        setLogged(false);
    };

    return (
        <SystemContext.Provider value={({
            allTags,
            logged,
            loading,
            times,
            setTimes,
            setLogged,
            setLoading,
            logout,
        })}>
            {props.children}
        </SystemContext.Provider>
    )
}