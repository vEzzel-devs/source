import { Dialog, DialogTitle } from "@mui/material";
import { DialogContent, DialogActions } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Vezzel from "../../components/Vezzel";
import { ThemeContext } from "../../context/ThemeContext";
import { RouteContext } from "../../context/RouteContext";
import {register} from "../utils/query";
function SessionRegister() {
    const { theme } = useContext(ThemeContext);
    const { setLogged } = useContext(RouteContext);
    const [ open, setOpen ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        let log = await register();

        if (log[0]) {
            //hacer algo con la id que contiene log[1]
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
            <button className={"md:w-1/8 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(true)}>Regístrate</button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Regístrate en <Vezzel/></DialogTitle>
                <DialogContent>
                <h3 className={"font-mono text-lg" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        Ingrese los siguientes datos a continuación:
                    </h3>
                    <TextField autoFocus fullWidth margin="dense" id="mail" label="Correo electrónico" type="email" variant="standard"/>
                    <TextField fullWidth margin="dense" id="name" label="Nombre de usuario" type="name" variant="standard"/>
                    <TextField fullWidth margin="dense" id="pass" label="Contraseña" type="password" variant="standard"/>
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