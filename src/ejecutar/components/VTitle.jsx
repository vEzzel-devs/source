import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VTitle({text, bg, color}) {
    const { theme } = useContext(ThemeContext);
    return (
        <h1 className={"w-full text-2xl text-center break-words rounded-md" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.mainText)}>
            {text}
        </h1>
    )
}

export default VTitle