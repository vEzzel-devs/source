import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VTitle({inRef, text, bg, color}) {
    const { theme } = useContext(ThemeContext);
    return (
        <h1 ref={inRef} className={"w-full p-2 text-2xl break-words rounded-md" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.mainText)}>
            {text}
        </h1>
    )
}

export default VTitle