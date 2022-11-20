import { DialogTitle, Tooltip, Dialog } from "@mui/material";
import { DialogContent, DialogActions, Zoom } from "@mui/material";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { createChat } from "../utils/query.js";

function StartChatDialog() {
    const { theme } = useContext(ThemeContext);
    const { setLoading } = useContext(SystemContext);
    const [ open, setOpen ] = useState(false);
    const searchRef = useRef();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        let target = searchRef.current.value;
        setLoading(true);
        let res = await createChat(target);
        setLoading(false);
        if (res[0]) {
            // Se requiere la estructura de la respuesta 
            console.log(res[1]);
        } else {
            setOpen(false);
            await new Promise(r => setTimeout(r, 10));
            alert(res[1]);
        }
        setOpen(false);
    };

    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Comunicar"} arrow>
                <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleOpen}><AddCommentIcon/></button>
            </Tooltip>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Iniciar conversación</DialogTitle>
                <DialogContent>
                    <h3 className={"font-mono text-lg mb-4" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        Comienza una conversación con un usuario en esta plataforma, para ello solo necesitas su nombre.
                    </h3>
                    <input ref={searchRef} className={"font-mono p-2 mb-2 w-full outline-0 border-2 rounded-sm" + theme.mainBg + theme.mainText + theme.borderNavbar} placeholder="Ingrese el nombre del usuario" style={{fontFamily: "Cascadia Code"}}/>
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={handleCancel} style={{fontFamily: "Cascadia Code"}}>Cancelar</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>Iniciar</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default StartChatDialog