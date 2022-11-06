import { DialogTitle, DialogContent, Zoom } from "@mui/material";
import { Dialog, Tooltip, DialogActions } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { removeuser } from "../utils/query.js";
import { RouteContext } from "../../context/RouteContext";

export function DeleteAccountDialog() {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    let res = await removeuser();
    setOpen(false);
    takeMeOut();
  };
  const id_name = localStorage.getItem('userid');

  return (
    <>
      <div className={"flex content-start items-start"}>
        <Tooltip
        TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Eliminar cuenta"} arrow>
          <button
            className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton}
            onClick={() => setOpen(true)}>
            <PersonRemoveIcon/>
          </button>
        </Tooltip>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Eliminar cuenta</DialogTitle>
        <DialogContent>
          <h3
            className={"font-mono text-lg" + theme.lightText}
            style={{ fontFamily: "Cascadia Code" }}
          >
            "{id_name}", estás segur@ de querer eliminar tu cuenta?
          </h3>
        </DialogContent>
        <DialogActions>
          <button
            className={ "font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton}
            onClick={() => setOpen(false)}
            style={{ fontFamily: "Cascadia Code" }}>
                Cancelar
          </button>
          <button
            className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton}
            type="submit"
            onClick={handleDelete}
            style={{ fontFamily: "Cascadia Code" }}>
                Confirmar
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export function LogoutDialog() {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const { setLogged } = useContext(RouteContext);
  const [isOpen, setIsOpen] = useState(false);
  

  const id_name = localStorage.getItem('userid');

  const handleLogout = () => {
    let localDim = JSON.parse(localStorage.getItem('sheetDim'));
    if (localDim) {
        localStorage.removeItem('sheetDim');
    }
    let localData = JSON.parse(localStorage.getItem('sheetData'));
    if (localData) {
      localStorage.removeItem('sheetData');
    }
    let localConfig = JSON.parse(localStorage.getItem('sheetConfig'));
    if (localConfig) {
      localStorage.removeItem('sheetConfig');
    }
    let localCells = JSON.parse(localStorage.getItem('sheetCells'));
    if (localCells) {
      localStorage.removeItem('sheetCells');
    }
    setLogged(false);
  };

  return (
    <>
      <div className={"flex content-start items-start"}>
        <Tooltip
        TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Cerrar sesión"} arrow>
          <button
            className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton}
            onClick={() => setOpen(true)}>
            <PowerSettingsNewIcon/>
          </button>
        </Tooltip>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Cerrar sesión</DialogTitle>
        <DialogContent>
          <h3
            className={"font-mono text-lg" + theme.lightText}
            style={{ fontFamily: "Cascadia Code" }}
          >
            "{id_name}", estás segur@ de querer cerrar sesión?
          </h3>
        </DialogContent>
        <DialogActions>
          <button
            className={ "font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton}
            onClick={() => setOpen(false)}
            style={{ fontFamily: "Cascadia Code" }}>
                Cancelar
          </button>
          <button
            className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton}
            type="submit"
            /* onClick={handleLogout} */
            style={{ fontFamily: "Cascadia Code" }}>
                Confirmar
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export function ChangeUserDialog() {
  const { theme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  
  const id_name = localStorage.getItem('userid');

  return (
    <>
      <div className={"flex content-start items-start"}>
        <Tooltip
        TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Cerrar sesión"} arrow>
          <button
            className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton}
            onClick={() => setOpen(true)}>
            <ChangeCircleIcon/>
          </button>
        </Tooltip>
      </div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Cerrar sesión</DialogTitle>
        <DialogContent>
          <h3
            className={"font-mono text-lg" + theme.lightText}
            style={{ fontFamily: "Cascadia Code" }}
          >
            "{id_name}", estás segur@ de querer cambiar de cuenta?
          </h3>
        </DialogContent>
        <DialogActions>
          <button
            className={ "font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton}
            onClick={() => setOpen(false)}
            style={{ fontFamily: "Cascadia Code" }}>
                Cancelar
          </button>
          <button
            className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton}
            type="submit"
            /* onClick={handleLogout} */
            style={{ fontFamily: "Cascadia Code" }}>
                Confirmar
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

