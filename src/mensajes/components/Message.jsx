import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Message({content, side}) {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            {/* TO DO */}
        </>
    )
}

export default Message