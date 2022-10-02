import { UserAppContextProvider } from './context/UserAppContext'

import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import AppContainer from './sections/AppContainer'

export function Layout() {
  return (
    <UserAppContextProvider>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
    </UserAppContextProvider>
  );
}
