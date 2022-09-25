import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function TooltipHelp(props) {
    const { theme } = useContext(ThemeContext);
    const [status, setStatus] = useState(false);


    return (
        <div>

        </div>
    )
}

export default TooltipHelp