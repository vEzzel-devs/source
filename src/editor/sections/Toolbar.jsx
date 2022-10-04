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
    <p>Vistas (/): Son celdas para definir los widgets que visualizará el usuario en la vista final de la aplicación.</p>
    <p>Tablas (#): Son celdas para guardar la información masiva, como conjuntos de datos o listas.</p>
    <p>Control ($): Son celdas para realizar operaciones de control con otras celdas, como bucles, condicionales o eventos.</p>
    <p>Algebra (=): Son celdas para calcular expresiones matemáticas, utilizando funciones y operaciones.</p>
    </>}>
      <h1>Editor <Vezzel/></h1>

        <InputBar/>
      
    </DashboardToolbar>
  )
}

export default Toolbar
