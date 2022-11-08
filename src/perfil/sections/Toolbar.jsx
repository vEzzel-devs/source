import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { DeleteAccountDialog } from '../components/DeleteDialog';
import ChangeSession from "../components/ChangeSession";
import { useContext, useState } from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Tooltip, Zoom, TextField } from '@mui/material';
import { SystemContext } from '../../context/SystemContext';
import { FilterContext } from '../context/FilterContext';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { logout } = useContext(SystemContext);
  const { setDetect } = useContext(FilterContext);
  const [input, setInput] = useState("");

  const resetHandler = () => {
    sessionStorage.clear();
    location.reload();
  }

  const inputHandler = (event) => {
    let raw = event.target.value;
    setInput(raw.replaceAll(" ", "_").replace(/\W/g, '').toLowerCase())
  };

  const handlerSearch = () => {
    let arr = input.split("_");
    if (arr.length === 0) {
      arr = [""];
    }
    setDetect(arr);
  };

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes ver tu perfil y sus estadisticas, puedes editar tu nombre de usuario y ver los comentarios que has hecho.</p>
      <p>En la barra de herramientas se encuentra algunos botones para realizar operaciones de accesibilidad, como lo es cambiar de cuenta o eliminar tu cuenta, si quieres terminar tu tiempo con vezzel.</p>
      <p>Tambien puedes buscar los comentarios por su contenido en la entrada de la barra de herramientas.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Refrescar"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={resetHandler}><CachedIcon/></button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Cerrar sesión"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={logout}><PowerSettingsNewIcon/></button>
        </Tooltip>
        <ChangeSession/>
        <DeleteAccountDialog/>
      </div>

      <div className="w-5/6 space-x-1 flex flex-row justify-center self-center">
        <div className="w-1/2 py-2 space-x-2 flex flex-row self-center content-center">
          <TextField
            fullWidth
            placeholder="Buscar"
            id="input-search"
            onChange={inputHandler}
            onKeyPress = {(e) =>{if (e.code == "Enter"){handlerSearch()}}}
          />
          <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handlerSearch}><SearchIcon/></button>
        </div>
      </div>
      
    </DashboardToolbar>
  )
}

export default Toolbar
