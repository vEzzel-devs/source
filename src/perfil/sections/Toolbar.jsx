import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { LogoutDialog, DeleteAccountDialog, ChangeUserDialog } from '../components/DeleteDialog';
import { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Tooltip, Zoom, TextField } from '@mui/material';
import { removeuser } from "../utils/query"

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const [added, setAdded] = useState([])
  const [input, setInput] = useState("")

  return (
    <DashboardToolbar helpText={<>
      <p>Tooltip.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <ChangeUserDialog/>
      </div>
      
      <div className="ml-4 flex flex-row space-x-2">
        <LogoutDialog/>
      </div>
       
      <div className="ml-4 flex flex-row space-x-2">
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
          <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={removeuser}><SearchIcon/></button>
        </div>
      </div>
      
    </DashboardToolbar>
  )
}

export default Toolbar
