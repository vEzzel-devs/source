import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VNote({text, bg, color}) {
    const { theme } = useContext(ThemeContext);
    return (
        <p className={"w-full p-2 break-words text-md rounded-md" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.lightText)}>
            {text}
        </p>
    )
}

export default VNote