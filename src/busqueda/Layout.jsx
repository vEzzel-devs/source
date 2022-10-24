import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import SearchBar from './sections/SearchBar'
import AppContainer from './sections/AppContainer'

export function Layout() {
  return (
    <>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
    </>
  )
}
