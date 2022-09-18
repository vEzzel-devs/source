import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Vezzel() {
    const { theme } = useContext(ThemeContext);
    return (
        <b className={theme.primaryText}>
            v<b className={theme.secondaryText}>Ez</b>zel
        </b>
    )
}

export default Vezzel