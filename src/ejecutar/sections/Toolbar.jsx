import DashboardToolbar from '../../components/DashboardToolbar'
import { Tooltip, Zoom } from "@mui/material";
import { CommContext } from '../context/CommContext';
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import CachedIcon from '@mui/icons-material/Cached';
import CopyDialog from "../components/CopyDialog";
import CommentDialog from "../components/CommentDialog";
import RemoveDialog from "../components/RemoveDialog";

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { mine } = useContext(CommContext)
  const navigate = useNavigate();

  const editHandler = () => {
    navigate("/edit");
  }

  const resetHandler = () => {
    location.reload();
  }

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes utilizar tu aplicación u otras aplicaciones hechas por los demás usuarios. Podrás clonar los proyectos de otros usuarios a tu cuenta de forma de que pueda personalizarlo más tarde.</p>
      <p>En la barra de herramientas se encuentra el botón para reiniciar la aplicación, guardar una copia de la aplicación en tu cuenta, ir al editor directamente para personalizar la programación de la cuenta y un último botón para realizar una valoración de este proyecto con un comentario y un puntaje.</p>
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
        {mine && <RemoveDialog/>}
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
