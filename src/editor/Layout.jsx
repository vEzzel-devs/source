//import DashboardNavbar from '../components/DashboardNavbar'
//import DashboardContainer from '../components/DashboardContainer'
import { AutocompleteContextProvider } from './context/AutocompleteContext';
import { SpreadSheetContextProvider } from './context/SpreadSheetContext';
import Toolbar from './sections/Toolbar'
import SpreadSheet from './sections/SpreadSheet'

function Layout() {
  /*
   * DashboardNavbar
   * DashboardContainer
   *   Toolbar
   *   SpreadSheet */

  return (
    <AutocompleteContextProvider>
      <SpreadSheetContextProvider>
        <></>
        <>
          <Toolbar/>
          <SpreadSheet/>
        </>
      </SpreadSheetContextProvider>
    </AutocompleteContextProvider>
  )
}

export default Layout