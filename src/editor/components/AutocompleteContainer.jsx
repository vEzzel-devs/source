import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function AutocompleteContainer(props) {
    const { theme } = useContext(ThemeContext);
    const [status, setStatus] = useState(false);

    return (
        <div className="relative max-w-[8rem] min-w-[8rem] flex flex-col" onClick={() => setStatus(true)} onBlur={() => setStatus(false)}>
            {props.children}
            {status && (props.cellRef.current.value != "") && <div role="tooltip" className={"z-20 w-36 absolute left-auto overflow-y-scroll" + theme.scrollbar + theme.sidebarBg + theme.lightText}>
                <div className={theme.hoverSidebar}>
                    {}
                </div>
            </div>}
        </div>
    );
}

export default AutocompleteContainer