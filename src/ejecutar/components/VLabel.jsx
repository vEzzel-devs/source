import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VLabel({inRef, text, bg, color}) {
    const { theme } = useContext(ThemeContext);
    return (
        <p ref={inRef} className={"w-full text-md break-words cursor-default" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.mainText)}>
            {text}
        </p>
    )
}

export default VLabel