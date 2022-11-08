import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { DeleteAccountDialog } from '../components/DeleteDialog';
import ChangeSession from "../components/ChangeSession";
import { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Tooltip, Zoom, TextField } from '@mui/material';
import { SystemContext } from '../../context/SystemContext';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { logout } = useContext(SystemContext)
  const [input, setInput] = useState("")

  return (
    <DashboardToolbar helpText={<>
      <p>Tooltip.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <ChangeSession/>
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Cerrar sesión"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={logout}><PowerSettingsNewIcon/></button>
        </Tooltip>
        <DeleteAccountDialog/>
      </div>

      <div className="w-5/6 space-x-1 flex flex-row justify-center self-center">
        <div className="w-1/2 py-2 space-x-2 flex flex-row self-center content-center">
          <TextField
            fullWidth
            placeholder="Buscar"
            id="input-search"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={()=>{}}><SearchIcon/></button>
        </div>
      </div>
      
    </DashboardToolbar>
  )
}

export default Toolbar
