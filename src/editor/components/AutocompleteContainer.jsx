import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function TooltipCell(props) {
    const { theme } = useContext(ThemeContext);
    const [status, setStatus] = useState(false);

    return (
        <div className="relative max-w-[12rem] min-w-[12rem] flex flex-col" onClick={() => setStatus(true)} onBlur={() => setStatus(false)}>
            {props.children}
            {status && (props.cellRef.current.value != "") && <div role="tooltip" className={"z-20 w-24 absolute left-auto overflow-y-scroll" + theme.scrollbar + theme.mainBg + theme.lightText}>
                <div className="">
                    {}
                </div>
            </div>}
        </div>
    );
}

export default TooltipCell