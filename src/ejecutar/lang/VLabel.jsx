import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserAppContext } from "../context/UserAppContext"

function VLabel({cell, size}) {
    const { theme } = useContext(ThemeContext);
    const { runtime } = useContext(UserAppContext);

    return (
        <p className={"w-full p-2 break-words rounded-md text-center" + theme.lightBg + theme.primaryText + ` text-[${size}px]`}>
            { runtime[cell] }
        </p>
    )
}

export default VLabel