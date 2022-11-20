import { createContext } from "react";

export const DocsDataContext = createContext();
export function DocsDataContextProvider(props) {
    return (
        <DocsDataContext.Provider value={({ })}>
            {props.children}
        </DocsDataContext.Provider>
    )
}