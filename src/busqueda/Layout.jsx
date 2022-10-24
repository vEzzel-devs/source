import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import AppContainer from './sections/AppContainer'
import { SearchContextProvider } from './context/SearchContext'

export function Layout() {
  return (
    <SearchContextProvider>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
    </SearchContextProvider>
  )
}
