import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes definir las funcionalidades y la vista de tu apliación mediante celdas tipadas. Entre los tipos disponibles:</p>
      <p>Vistas (/): Son celdas para definir los widgets que visualizará el usuario en la vista final de la aplicación.</p>
      <p>Tablas (#): Son celdas para guardar la información masiva, como conjuntos de datos o listas.</p>
      <p>Control ($): Son celdas para realizar operaciones de control con otras celdas, como bucles, condicionales o eventos.</p>
      <p>Algebra (=): Son celdas para calcular expresiones matemáticas, utilizando funciones y operaciones.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <button className={"md:w-36 flex self-start justify-center mr-2 p-2 rounded-lg border-2" + theme.secondaryButton + theme.secondaryText} onClick={()=>{}}><DeleteOutlineIcon/> Borrar</button>
        <button className={"md:w-36 flex self-start justify-center mr-2 p-2 rounded-lg border-2" + theme.primaryButton + theme.primaryText} onClick={()=>navigate("/edit")}><DesignServicesIcon/> Nuevo</button>
        <button className={"md:w-36 flex self-start justify-center mr-2 p-2 rounded-lg border-2" + theme.primaryButton + theme.primaryText} onClick={()=>navigate("/edit")}><EditIcon/> Continuar</button>
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
