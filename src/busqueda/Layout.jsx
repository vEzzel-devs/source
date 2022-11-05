import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import AppContainer from './sections/AppContainer'
import { SearchContextProvider } from './context/SearchContext'
import { SystemContext } from '../context/SystemContext'
import LoadingScreen from '../components/LoadingScreen'
import { useContext } from 'react'

export function Layout() {

  const { loading } = useContext(SystemContext);

  return (
    <SearchContextProvider>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
      {loading && <LoadingScreen/>}
    </SearchContextProvider>
  )
}
