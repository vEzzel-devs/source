import { UserAppContextProvider } from './context/UserAppContext'
import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import AppContainer from './sections/AppContainer'
import { SystemContext } from '../context/SystemContext'
import LoadingScreen from '../components/LoadingScreen'
import { useContext } from 'react'

export function Layout() {

  const { loading } = useContext(SystemContext);

  return (
    <UserAppContextProvider>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
      {loading && <LoadingScreen/>}
    </UserAppContextProvider>
  )
}
