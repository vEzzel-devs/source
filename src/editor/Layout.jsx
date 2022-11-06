import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import { AutocompleteContextProvider } from './context/AutocompleteContext';
import Toolbar from './sections/Toolbar'
import SpreadSheet from './sections/SpreadSheet'
import { SystemContext } from '../context/SystemContext'
import LoadingScreen from '../components/LoadingScreen'
import { useContext } from 'react'

export function Layout() {

  const { loading } = useContext(SystemContext);

  return (
    <AutocompleteContextProvider>
        <DashboardPage>
          <SpreadSheet/>
          <Toolbar/>
        </DashboardPage>
        <Sidebar/>
        {loading && <LoadingScreen/>}
    </AutocompleteContextProvider>
  )
}
