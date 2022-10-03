import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from '../../components/Vezzel'
import { SpreadSheetContext } from '../context/SpreadSheetContext';
import InputBar from '../components/InputBar';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { addDim } = useContext(SpreadSheetContext);

  return (
    <DashboardToolbar helpText={<>
    <p>En esta vista puedes definir las funcionalidades y la vista de tu apliación mediante celdas tipadas. Entre los tipos disponibles:</p>
    <p>Vistas (/): Son celdas para </p>
    </>}>
      <h1>Editor <Vezzel/></h1>

        <InputBar/>
      
    </DashboardToolbar>
  )
}

export default Toolbar
