import { Dialog, DialogTitle } from "@mui/material";
import { DialogContent, DialogActions } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Vezzel from "../../components/Vezzel";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import { UserDataContext } from "../../context/UserDataContext";
import {register} from "../utils/query";

function SessionRegister() {
    const { theme } = useContext(ThemeContext);
    const { logged, setLogged, setLoading, logout } = useContext(SystemContext);
    const { setUsername } = useContext(UserDataContext);
    const [ open, setOpen ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);
        let log = await register();
        setLoading(false);
        await new Promise(r => setTimeout(r, 10));
        if (log[0]) {
            localStorage.setItem('userid', (log[1]));
            localStorage.setItem('username', (log[2]));
            setLogged(true);
            setOpen(false);
            navigate("/search");
        }else{
            // hacer mas bonito el alert
            alert(log[1]);
        }
    };

    const btnHandler = () => {
        if (logged) {
            logout();
        } else {
            setOpen(true)
        }
    };

    return (
        <div className="mr-2">
            <button className={"md:w-1/8 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={btnHandler}>{logged ? "Cerrar sesión" : "Regístrate"}</button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Regístrate en <Vezzel/></DialogTitle>
                <DialogContent>
                <h3 className={"font-mono text-md" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        La contraseña debe contener al menos una mayúscula, un dígito y un largo de 8 caracteres, con eso en mente, ingrese sus datos a continuación:
                    </h3>
                    <TextField autoFocus fullWidth margin="dense" id="mail" label="Correo electrónico" type="email" variant="standard"/>
                    <TextField fullWidth margin="dense" id="name" label="Nombre de usuario" type="name" variant="standard"/>
                    <TextField fullWidth margin="dense" id="pass" label="Contraseña" type="password" variant="standard" onKeyPress = {(e) =>{if (e.code == "Enter"){handleSubmit()}}}/>
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(false)} style={{fontFamily: "Cascadia Code"}}>Volver</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>Registrarse</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default SessionRegister