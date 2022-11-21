import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VButton({text, click}) {
    // maybe reafctor this
    let clickHandle = () => {};
    if (click) {
        clickHandle = click;
    }
    const { theme } = useContext(ThemeContext);
    return (
        <button onClick={clickHandle} className={"w-full p-1 px-2 rounded-md border-1" + theme.primaryButton + theme.mainText}>
            {text}
        </button>
    )
}

export default VButton