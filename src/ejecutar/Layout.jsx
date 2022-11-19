import { UserAppContextProvider } from './context/UserAppContext'
import { CommContextProvider } from './context/CommContext'
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
      <CommContextProvider>
        <DashboardPage>
          <Toolbar/>
          <AppContainer/>
        </DashboardPage>
        <Sidebar/>
        {loading && <LoadingScreen/>}
      </CommContextProvider>
    </UserAppContextProvider>
  )
}
