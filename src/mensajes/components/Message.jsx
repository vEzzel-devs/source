import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Message({content, side, time}) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={"w-5/6 flex flex-row" + (side === "right" ?  "-reverse self-end" : " self-start")}>
            <div className={"p-1 px-2 text-md rounded-lg flex flex-col" + theme.lightBg}>
                {content}
            </div>
            {time && <div className={"self-end px-2 text-xs flex flex-col" + theme.lightText}>
                {time}
            </div>}
        </div>
    )
}

export default Message