import { DialogTitle, Tooltip, Dialog, TextField } from "@mui/material";
import { DialogContent, DialogActions, Zoom, Autocomplete } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import AddCommentIcon from '@mui/icons-material/AddComment';
import { createChat, getAllUser } from "../utils/query.js";
import { MsgContext } from '../context/MsgContext';

function StartChatDialog() {
    const { theme } = useContext(ThemeContext);
    const { setLoading } = useContext(SystemContext);
    const { getChats } = useContext(MsgContext);
    const [ open, setOpen ] = useState(false);
    const [option, setOption] = useState([]);
    const searchRef = useRef();

    useEffect(() => {
        const getOptions = async () => {
            try {
                const res = await getAllUser();
                setOption(res);
            } catch (err) {
                console.log(err);
            }
        };
        getOptions();
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        let target = document.getElementById("searchname").value;
        let msg = document.getElementById("msg").value;
        target = option.filter((user) => user.label === target)[0];
        setLoading(true);
        let res = await createChat(target,msg);
        setLoading(false);
        if (res.status === 200) {
            // Se requiere la estructura de la respuesta 
            getChats();
        } else {
            setOpen(false);
            await new Promise(r => setTimeout(r, 10));
            alert(`No se pudo iniciar una conversación con ${target.label}. Puede que el usuario no exista, o en su defecto que no se encuentre disponible.`);
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
                    <Autocomplete
                        options={option}
                        id="searchname"
                        renderInput={(params) => <TextField {...params} ref={searchRef} className={"font-mono p-2 mb-2 w-full outline-0 border-2 rounded-sm " + theme.mainBg + theme.mainText + theme.borderNavbar} placeholder="Ingrese el nombre del usuario" style={{fontFamily: "Cascadia Code"}}/>}
                    />
                    <input type="text" id="msg" ref={searchRef} className={"mt-2 font-mono p-2 mb-2 w-full outline-0 border-2 rounded-sm" + theme.mainBg + theme.mainText + theme.borderNavbar} placeholder="Ingrese el mensaje" style={{fontFamily: "Cascadia Code"}}/>
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