import DashboardToolbar from '../../components/DashboardToolbar'
import { TextField, Tooltip, Zoom } from "@mui/material";
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import StartChatDialog from '../components/StartChatDialog';

function Toolbar() {
  const { theme } = useContext(ThemeContext);

  const resetHandler = () => {
    location.reload();
  };
  const inputHandler = (event) => {
    let raw = event.target.value;
  };
  const handlerSearch = () => {
    let arr = input.split("_");
  };

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes hacer cosas.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Refrescar"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={resetHandler}><CachedIcon/></button>
        </Tooltip>
        <StartChatDialog/>
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
