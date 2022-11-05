import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import CachedIcon from '@mui/icons-material/Cached';
import CopyDialog from "../components/CopyDialog";
import CommentDialog from "../components/CommentDialog";
import { Tooltip, Zoom } from "@mui/material";

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const editHandler = () => {
    navigate("/edit");
  }

  const resetHandler = () => {
    location.reload()
  }

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes hacer XD</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Reiniciar"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={resetHandler}><CachedIcon/></button>
        </Tooltip>
        <CopyDialog/>
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Editar"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={editHandler}><EditIcon/></button>
        </Tooltip>
        <CommentDialog/>
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
