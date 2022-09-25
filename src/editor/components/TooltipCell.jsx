import { useContext, useState } from "react";
import { SpreadSheetContext } from "../context/SpreadSheetContext";
import { ThemeContext } from "../../context/ThemeContext";

function TooltipCell(props) {
    const { theme } = useContext(ThemeContext);
    const { selectedCell } = useContext(SpreadSheetContext)
    const [status, setStatus] = useState(false);

    const setClass = (cls, newchar) => {
        setStatus(false);
        console.log(newchar, cls);
        selectedCell.current.value = newchar;
        props.setCls(cls);
        selectedCell.current.focus();
    };

    return (
        <div className="relative max-w-[8rem] min-w-[8rem] flex flex-col" onClick={() => setStatus(true)} onBlur={() => setStatus(false)}>
            {props.children}
            {status && (selectedCell.current.value === "") && <div role="tooltip" className="z-20 -mt-20 top-0 w-24 absolute left-auto rounded-lg overflow-hidden">
                <div>
                    <button onClick={() => setClass(" bg-red-300", "/")} className="bg-red-300 w-1/2 py-2">/</button>
                    <button onClick={() => setClass(" bg-blue-300", "#")} className="bg-blue-300 w-1/2 py-2">#</button>
                </div>
                <div>
                    <button onClick={() => setClass(" bg-green-300", "=")} className="bg-green-300 w-1/2 py-2">=</button>
                    <button onClick={() => setClass(" bg-purple-300", "$")} className="bg-purple-300 w-1/2 py-2">$</button>
                </div>
            </div>}
        </div>
    );
}

export default TooltipCell