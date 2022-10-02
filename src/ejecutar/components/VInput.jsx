import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function VInput({inRef, filter, callback, text, bg, color}) {
    const { theme } = useContext(ThemeContext);
    return (
        <input ref={inRef} onChange={filter} onSubmit={callback} placeholder={text} className={"w-full border" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.mainText)}/>
    )
}

export default VInput