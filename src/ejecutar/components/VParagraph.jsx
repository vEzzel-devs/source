import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VParagraph({inRef, text, bg, color}) {
    const { theme } = useContext(ThemeContext);
    return (
        <p ref={inRef} className={"w-full p-2 break-words text-md rounded-md" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.mainText)}>
            {text}
        </p>
    )
}

export default VParagraph