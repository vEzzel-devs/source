import { DialogTitle, DialogContent, Zoom } from "@mui/material";
import { Dialog, Tooltip, DialogActions } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import { CommContext } from "../context/CommContext";
import { UserDataContext } from "../../context/UserDataContext";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import { deleteComm } from "../utils/query.js";

function RemoveDialog() {
    const { theme } = useContext(ThemeContext);
    const { queryComment } = useContext(UserDataContext);
    const { mine } = useContext(CommContext);
    const { setLoading } = useContext(SystemContext);
    const [ open, setOpen ] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const res  = await deleteComm(mine._id);
            queryComment(({
                "_id": mine._id,
            }), "Eliminar");
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
        setLoading(false);
        setOpen(false);
    };

    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Borrar Comentario"} arrow>
                <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={()=>setOpen(true)}><CommentsDisabledIcon/></button>
            </Tooltip>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>Eliminar comentario</DialogTitle>
                <DialogContent>
                    <h3 className={"font-mono text-lg" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        Está segur@ de querer eliminar la valoración que ha hecho de esta aplicación?
                    </h3>
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={()=>setOpen(false)} style={{fontFamily: "Cascadia Code"}}>Cancelar</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>Confirmar</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default RemoveDialog