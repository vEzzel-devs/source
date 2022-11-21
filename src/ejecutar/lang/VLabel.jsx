import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserAppContext } from "../context/UserAppContext"

function VLabel({cell, size}) {
    const { theme } = useContext(ThemeContext);
    const { runtime } = useContext(UserAppContext);

    const cellRef = runtime.find((element) => {
        return element.ref === cell;
    });

    return (
        <p className={"w-full p-2 break-words rounded-md" + theme.lightBg + theme.primaryText + `text-[${size}px]`}>
            { cellRef.cell.cont }
        </p>
    )
}

export default VLabel