import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function LoadingScreen() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={"h-full w-full absolute z-[9999] left-0 top-0 flex flex-col justify-center text-center opacity-95" + theme.mainBg + theme.lightText}>
            <h1 className="text-5xl self-center text-center mb-8">
                Cargando...
            </h1>
            <CircularProgress/>
        </div>
    )
}

export default LoadingScreen