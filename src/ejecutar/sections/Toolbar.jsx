import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Toolbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <DashboardToolbar>
      <h1>Ejecución de la app</h1>
    </DashboardToolbar>
  )
}

export default Toolbar
