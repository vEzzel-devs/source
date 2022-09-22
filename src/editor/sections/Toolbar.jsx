import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from '../../components/Vezzel'

function Toolbar() {
  const { theme } = useContext(ThemeContext);

  /*
   * DashboardToolbar
   *   Content of toolbar */

  return (
    <DashboardToolbar>
      <Vezzel/>
    </DashboardToolbar>
  )
}

export default Toolbar
