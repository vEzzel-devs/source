import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DocsRouteContext } from "../context/DocsRouteContext";

function SidePanel() {
    const { theme } = useContext(ThemeContext);
    const { active, topics, setActive } = useContext(DocsRouteContext);
    // implement responsive index in a future
    const [ open, setOpen ] = useState(false);

    const selfSelect = (idx) => {
        setActive(idx);
    };

    return (
        <div className={"hidden md:block md:w-1/6 h-full p-2 flex flex-col overflow-y-scroll truncate cursor-default" + theme.sidebarBg + theme.lightText + theme.scrollbar}>
            <h1 className={"text-center mt-4 mb-2 text-3xl" + theme.mainText}>Índice</h1>
            {topics.map((element, idx) => {
                return (
                <div key={`topic-from-docs-${idx}`}>
                    <a className={"ml-2" + ((idx === active) ? theme.primaryText : " hover:underline cursor-pointer")} onClick={() => selfSelect(idx)}>{element}</a>
                </div>);
            })}
        </div>
    )
}

export default SidePanel