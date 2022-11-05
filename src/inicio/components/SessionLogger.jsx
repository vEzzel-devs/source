import { Dialog, DialogTitle } from "@mui/material";
import { DialogContent, DialogActions } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Vezzel from "../../components/Vezzel";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import {logger} from "../utils/query";

function SessionLogger() {
    const { theme } = useContext(ThemeContext);
    const { setLogged } = useContext(SystemContext);
    const [ open, setOpen ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        let log = await logger();
        if (log[0]) {
            
            localStorage.setItem('userid', (log[1]));
            setOpen(false);
            setLogged(true);
            navigate("/search");
        }else{
            // hacer mas bonito el alert
            alert(log[1]);
        }
    };

    return (
        <div className="mr-2">
            <button className={"md:w-1/8 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.primaryButton} onClick={() => setOpen(true)}>Inicia sesión</button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Inicia sesión en <Vezzel/></DialogTitle>
                <DialogContent>
                    <h3 className={"font-mono text-lg" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        Bienvenid@ de vuelta! Ingresa tus credenciales a continuación:
                    </h3>
                    <TextField autoFocus fullWidth margin="dense" id="mail" label="Correo electrónico" type="email" variant="standard"/>
                    <TextField fullWidth margin="dense" id="pass" label="Contraseña" type="password" variant="standard"/>
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(false)} style={{fontFamily: "Cascadia Code"}}>Volver</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>Iniciar</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default SessionLogger