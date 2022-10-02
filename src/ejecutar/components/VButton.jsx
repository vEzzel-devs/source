import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VButton({text, color, click}) {
    const { theme } = useContext(ThemeContext);
    return (
        <button onClick={click} className={"w-full p-2 rounded-md border-2" + theme.primaryButton + theme.mainText + (color ? ` border-[${color}] hover:bg-[${color}]` : "")}>
            {text}
        </button>
    )
}

export default VButton