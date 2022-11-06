import { createContext } from "react";
import { Layout as Inicio } from "../inicio/Layout";
import { Layout as Editor } from "../editor/Layout";
import { Layout as Ejecutar } from "../ejecutar/Layout";
import { Layout as Busqueda } from "../busqueda/Layout";
import { Layout as Guardados } from "../guardados/Layout";
import { Layout as Perfil } from "../perfil/Layout";

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
        {
            url: "/profile",
            comp: <Perfil/>,
        },
    ];

    return (
        <RouteContext.Provider value={({ allRoutes })}>
            {props.children}
        </RouteContext.Provider>
    )
}