import { createContext } from "react";
import { Layout as Inicio } from "../inicio/Layout";
import { Layout as Editor } from "../editor/Layout";
import { Layout as Ejecutar } from "../ejecutar/Layout";
import { Layout as Busqueda } from "../busqueda/Layout";
import { Layout as Guardados } from "../guardados/Layout";
import { useState, useEffect } from "react";

export const RouteContext = createContext();
export function RouteContextProvider(props) {
    const allRoutes = [
        {
            url: "/",
            comp: <Inicio/>,
        },
        {
            url: "/saved",
            comp: <Guardados/>,
        },
        {
            url: "/search",
            comp: <Busqueda/>,
        },
        {
            url: "/edit",
            comp: <Editor/>,
        },
        {
            url: "/run",
            comp: <Ejecutar/>,
        },
    ];

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
        <RouteContext.Provider value={({ allRoutes, logged, setLogged })}>
            {props.children}
        </RouteContext.Provider>
    )
}