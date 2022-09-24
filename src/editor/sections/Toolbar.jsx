import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from '../../components/Vezzel'
import { SpreadSheetContext } from '../context/SpreadSheetContext';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { addDim } = useContext(SpreadSheetContext);

  return (
    <DashboardToolbar>
      <h1>Editor de hojas de cálculo tipadas <Vezzel/></h1>
    </DashboardToolbar>
  )
}

export default Toolbar
