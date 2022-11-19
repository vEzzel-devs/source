import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import AppContainer from './sections/AppContainer'
import { MsgContextProvider } from './context/MsgContext'
import { SystemContext } from '../context/SystemContext'
import LoadingScreen from '../components/LoadingScreen'
import { useContext } from 'react'

export function Layout() {

  const { loading } = useContext(SystemContext);

  return (
    <MsgContextProvider>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
      {loading && <LoadingScreen/>}
    </MsgContextProvider>
  )
}
