import { useContext, useState } from "react";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { ThemeContext } from "../../context/ThemeContext";

function TooltipCell(props) {
    const { theme } = useContext(ThemeContext);
    const { selectedCell } = useContext(SpreadSheetContext)
    const [status, setStatus] = useState(undefined);

    const setClass = (cls, newchar) => {
        setStatus(undefined);
        selectedCell.current.value = newchar;
        props.setCls(cls);
        selectedCell.current.focus();
    };

    return (
        <div className="relative max-w-[8rem] min-w-[8rem] flex flex-col" onClick={() => setStatus(props.cellRef)} onMouseLeave={() => setStatus(undefined)}>
            {props.children}
            {status === selectedCell && (selectedCell.current.value === "") && <div role="tooltip" className={"z-20 ml-4 w-24 absolute left-auto rounded-lg overflow-hidden" + ("1 2 3".includes(props.cellRow) ? " mt-6" : " top-0 -mt-20")}>
                <div>
                    <button onClick={() => setClass("view", "/")} className={"w-1/2 py-2" + theme.cells.view + theme.mainText}>/</button>
                    <button onClick={() => setClass("data", "#")} className={"w-1/2 py-2" + theme.cells.data + theme.mainText}>#</button>
                </div>
                <div>
                    <button onClick={() => setClass("math", "=")} className={"w-1/2 py-2" + theme.cells.math + theme.mainText}>=</button>
                    <button onClick={() => setClass("ctrl", "$")} className={"w-1/2 py-2" + theme.cells.ctrl + theme.mainText}>$</button>
                </div>
            </div>}
        </div>
    );
}

export default TooltipCell