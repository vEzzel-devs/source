import { CircularProgress } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { UserDataContext } from "../context/UserDataContext";

function LoadingScreen({ welcome }) {
    const { theme } = useContext(ThemeContext);
    const { username } = useContext(UserDataContext);

    return (
        <div className={"h-full w-full absolute z-[9999] left-0 top-0 flex flex-col justify-center text-center opacity-95" + theme.mainBg + theme.lightText}>
            <h1 className="text-5xl self-center text-center mb-8">
                {(welcome)
                ? <>Bienvenid@{(username)
                    ? <em className={theme.primaryText}>, {username}</em>
                    : " de vuelta"
                }!</>
                : "Cargando..."}
            </h1>
            <CircularProgress/>
        </div>
    )
}

export default LoadingScreen