import { Dialog, DialogTitle } from "@mui/material";
import { DialogContent, DialogActions } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Vezzel from "../../components/Vezzel";
import { ThemeContext } from "../../context/ThemeContext";
import { RouteContext } from "../../context/RouteContext";

function SessionRegister() {
    const { theme } = useContext(ThemeContext);
    const { setLogged } = useContext(RouteContext);
    const [ open, setOpen ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        setOpen(false);
        setLogged(true);
        navigate("/search");
    };

    return (
        <div className="mr-2">
            <button className={"md:w-1/8 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(true)}>Regístrate</button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Regístrate en <Vezzel/></DialogTitle>
                <DialogContent>
                    <h3 className={"text-lg" + theme.lightText}>
                        Ingrese los siguientes datos a continuación:
                    </h3>
                    <TextField autoFocus fullWidth margin="dense" id="mail" label="Correo electrónico" type="email" variant="standard"/>
                    <TextField fullWidth margin="dense" id="name" label="Nombre de usuario" type="name" variant="standard"/>
                    <TextField fullWidth margin="dense" id="pass" label="Contraseña" type="password" variant="standard"/>
                </DialogContent>
                <DialogActions>
                    <button className={"md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(false)}>Volver</button>
                    <button className={"md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit}>Registrarse</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default SessionRegister