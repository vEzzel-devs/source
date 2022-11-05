import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function LoadingScreen() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={"h-full w-full absolute z-20 left-0 top-0 flex flex-col justify-center text-center" + theme.primaryBg + theme.mainText}>
            <h1 className="w-3/4 text-6xl self-center text-center mb-8">
                Por favor espere un momento mientras preparamos todo.
            </h1>
            <CircularProgress/>
        </div>
    )
}

export default LoadingScreen