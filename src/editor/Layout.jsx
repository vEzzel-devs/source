import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import { AutocompleteContextProvider } from './context/AutocompleteContext';
import { SpreadSheetContextProvider } from './context/SpreadSheetContext';
import Toolbar from './sections/Toolbar'
import SpreadSheet from './sections/SpreadSheet'

export function Layout() {
  return (
    <AutocompleteContextProvider>
      <SpreadSheetContextProvider>
        <DashboardPage>
          
          <SpreadSheet/>
          <Toolbar/>
        </DashboardPage>
        <Sidebar/>
      </SpreadSheetContextProvider>
    </AutocompleteContextProvider>
  )
}
