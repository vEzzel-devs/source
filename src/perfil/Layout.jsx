import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import ProfileContainer from './sections/ProfileContainer'
import Toolbar from './sections/Toolbar'

export function Layout() {
  return (
    <div>
        <DashboardPage>
        <Toolbar/>
        <ProfileContainer/>
        </DashboardPage>
        <Sidebar/>
    </div>
  )
}
