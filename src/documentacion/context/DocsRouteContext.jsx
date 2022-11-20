import { createContext } from "react";

export const DocsRouteContext = createContext();
export function DocsRouteContextProvider(props) {
    return (
        <DocsRouteContext.Provider value={({ })}>
            {props.children}
        </DocsRouteContext.Provider>
    )
}