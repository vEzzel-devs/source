import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import AppContainer from './sections/AppContainer'
import { SystemContext } from '../context/SystemContext'
import LoadingScreen from '../components/LoadingScreen'
import { FilterContextProvider } from "./context/FilterContext"
import { useContext } from 'react'

export function Layout() {

  const { loading } = useContext(SystemContext);
  
  return (
    <FilterContextProvider>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
      {loading && <LoadingScreen/>}
    </FilterContextProvider>
  )
}
