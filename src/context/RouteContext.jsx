import { createContext } from "react";
import { Layout as Inicio } from "../inicio/Layout";
import { Layout as Editor } from "../editor/Layout";
import { Layout as Ejecutar } from "../ejecutar/Layout";

export const RouteContext = createContext();
export function RouteContextProvider(props) {
    const allRoutes = [
        {
            url: "/",
            comp: <Inicio/>,
        },
        {
            url: "/editor",
            comp: <Editor/>,
        },
        {
            url: "/ejecutar",
            comp: <Ejecutar/>,
        },
    ];

    return (
        <RouteContext.Provider value={({ allRoutes })}>
            {props.children}
        </RouteContext.Provider>
    )
}