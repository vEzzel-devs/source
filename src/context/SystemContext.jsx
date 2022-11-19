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
    
    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged]);

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
            setLogged,
            setLoading,
            logout,
        })}>
            {props.children}
        </SystemContext.Provider>
    )
}