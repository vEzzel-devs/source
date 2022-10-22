import { createContext } from "react";
import { Layout as Inicio } from "../inicio/Layout";
import { Layout as Editor } from "../editor/Layout";
import { Layout as Ejecutar } from "../ejecutar/Layout";
import { Layout as Busqueda } from "../busqueda/Layout";
import { Layout as Proyectos } from "../proyectos/Layout";
import { useState, useEffect } from "react";

export const RouteContext = createContext();
export function RouteContextProvider(props) {
    const allRoutes = [
        {
            url: "/",
            comp: <Inicio/>,
        },
        {
            url: "/projects",
            comp: <Proyectos/>,
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

    const [ logged, setLogged ] = useState(false);

    useEffect(() => {
        let localLogged = JSON.parse(localStorage.getItem('logged'));
        if (localLogged) {
            setLogged(true);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('logged', JSON.stringify(logged));
    }, [logged]);

    return (
        <RouteContext.Provider value={({ allRoutes, logged, setLogged })}>
            {props.children}
        </RouteContext.Provider>
    )
}