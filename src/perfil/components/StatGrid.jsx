import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserDataContext } from "../../context/UserDataContext";
import { Tooltip, Zoom } from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';
import StarIcon from '@mui/icons-material/Star';

function StatGrid() {
    const { theme } = useContext(ThemeContext);
    const { getStats, comments, cards } = useContext(UserDataContext);
    const [ stats, setStats ] = useState(getStats());

    useEffect(() => {
        setStats(getStats());
    }, [comments, cards]);

    return (
        <div className="justify-self-center self-center flex flex-row content-center justify-center space-x-4 md:space-x-8">
            <div className="mt-4 flex flex-col">
                <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={"Promedio de resultados"} arrow>
                    <div className={"text-xl" + theme.primaryText}>
                        <StarIcon/>Proyectos: {(isNaN(stats[0]) ? "-" : stats[0])}
                    </div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Promedio de valoración"} arrow>
                    <div className={"text-xl" + theme.primaryText}>
                        <StarIcon/>Comentarios: {(isNaN(stats[2]) ? "-" : stats[2])}
                    </div>
                </Tooltip>
            </div>
            <div className="mt-4 flex flex-col">
            <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={"Creados por ti"} arrow>
                    <div className={"text-xl" + theme.primaryText}>
                        <TagIcon/>Proyectos: {stats[1]}
                    </div>
                </Tooltip>
                <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Comentados por ti"} arrow>
                    <div className={"text-xl" + theme.primaryText}>
                        <TagIcon/>Comentarios: {stats[3]}
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

export default StatGrid