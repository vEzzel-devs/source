import { Dialog, DialogTitle, Tooltip } from "@mui/material";
import { DialogContent, DialogActions, Zoom } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import { UserDataContext } from "../../context/UserDataContext";
import {logger} from "../utils/query";

function ChangeSession() {
    const { theme } = useContext(ThemeContext);
    const { logout, setLogged, setLoading } = useContext(SystemContext);
    const { setUsername } = useContext(UserDataContext);
    const [ open, setOpen ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        logout();
        let log = await logger();
        setLoading(false);
        await new Promise(r => setTimeout(r, 10));
        if (log[0]) {
            localStorage.setItem('userid', (log[1]));
            setUsername(log[2]);
            setLogged(true);
            setOpen(false);
            navigate("/search");
        }else{
            // hacer mas bonito el alert
            alert(log[1]);
        }
    };

    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Cambiar Sesión"} arrow>
                <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={() => setOpen(true)}><SwitchAccountIcon/></button>
            </Tooltip>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Cambiar de cuenta</DialogTitle>
                <DialogContent>
                    <h3 className={"font-mono text-lg" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        Ingrese sus credenciales a continuación:
                    </h3>
                    <TextField autoFocus fullWidth margin="dense" id="mail" label="Correo electrónico" type="email" variant="standard"/>
                    <TextField fullWidth margin="dense" id="pass" label="Contraseña" type="password" variant="standard" onKeyPress = {(e) =>{if (e.code == "Enter"){handleSubmit()}}}/>
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(false)} style={{fontFamily: "Cascadia Code"}}>Volver</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>Iniciar</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default ChangeSession