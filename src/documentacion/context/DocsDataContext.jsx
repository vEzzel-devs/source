import { createContext } from "react";

export const DocsDataContext = createContext();
export function DocsDataContextProvider(props) {
    const test = [
        {
            title: "Test",
            level: 0,
            content: ["Lorem ipsum and any other stuff from a paragraph..."],
        },
        {
            title: "SubTest",
            level: 1,
            content: ["Lorem ipsum and any other stuff from a paragraph..."],
        },
    ];
    const test2 = [
        {
            title: "Test2",
            level: 0,
            content: ["Lorem ipsum and any other stuff from a paragraph..."],
        },
        {
            title: "SubTest2",
            level: 1,
            content: ["Lorem ipsum and any other stuff from a paragraph..."],
        },
    ];

    return (
        <DocsDataContext.Provider value={({ test, test2 })}>
            {props.children}
        </DocsDataContext.Provider>
    )
}