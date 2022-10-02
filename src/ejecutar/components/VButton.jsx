import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VButton({text, color, func}) {
    const { theme } = useContext(ThemeContext);
    return (
        <button onClick={func} className={"w-full p-2 rounded-md border-2" + theme.primaryButton + theme.mainText + (color ? ` border-[${color}] hover:bg-[${color}]` : "")}>
            {text}
        </button>
    )
}

export default VButton