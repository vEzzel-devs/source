import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import ProfileContainer from './sections/ProfileContainer'
import Toolbar from './sections/Toolbar'
import { useContext } from 'react';
import { SystemContext } from '../context/SystemContext';
import LoadingScreen from '../components/LoadingScreen';
import { FilterContextProvider } from './context/FilterContext';

export function Layout() {

  const { loading } = useContext(SystemContext);

  return (
    <FilterContextProvider>
      <DashboardPage>
      <Toolbar/>
      <ProfileContainer/>
      </DashboardPage>
      <Sidebar/>
      {loading && <LoadingScreen/>}
    </FilterContextProvider>
  )
}
