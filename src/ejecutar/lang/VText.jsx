import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VText({text, size}) {
    const { theme } = useContext(ThemeContext);

    return (
        <p className={"w-full p-2 break-words rounded-md" + theme.lightBg + theme.mainText + `text-[${size}px]`}>
            {text}
        </p>
    )
}

export default VText