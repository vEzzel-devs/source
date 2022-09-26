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
    <DashboardToolbar helpText={"Texto de ayuda del editor"}>
      <h1>Editor de HCT <Vezzel/></h1>

        <InputBar/>
      
    </DashboardToolbar>
  )
}

export default Toolbar
