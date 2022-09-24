import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import Pendient from './sections/Pendient'

export function Layout() {
  return (
    <>
      <DashboardPage>
        <Toolbar/>
        <Pendient/>
      </DashboardPage>
      <Sidebar/>
    </>
  )
}
