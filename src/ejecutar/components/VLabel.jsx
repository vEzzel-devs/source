import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserAppContext } from "../context/UserAppContext"

function VLabel({cell, bg, color}) {
    const { theme } = useContext(ThemeContext);
    const { sheetData } = useContext(UserAppContext);

    const cellRef = sheetData.find((element) => {
        return element.ref === cell;
    });

    return (
        <p className={"w-full text-md break-words cursor-default" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.mainText)}>
            { cellRef.cell.cont }
        </p>
    )
}

export default VLabel