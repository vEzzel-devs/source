import Sidebar from '../components/Sidebar'
import DashboardPage from '../components/DashboardPage'
import Toolbar from './sections/Toolbar'
import AppContainer from './sections/AppContainer'
import { SearchContextProvider } from './context/SearchContext'
import { SystemContext } from '../context/SystemContext'
import { UserDataContext } from '../context/UserDataContext'
import { useContext } from 'react'
import Notification from '../components/Notification'
import LoadingScreen from '../components/LoadingScreen'
import { useEffect } from 'react'

export function Layout() {
  const { loading, times, setTimes } = useContext(SystemContext);
  const { username } = useContext(UserDataContext);
  useEffect(() => {
    setTimes(times + 1);
  }, []);
  return (
    <SearchContextProvider>
      <DashboardPage>
        <Toolbar/>
        <AppContainer/>
      </DashboardPage>
      <Sidebar/>
      {loading && <LoadingScreen/>}
      {!loading && (!loading && times === 1) &&
        <Notification
          title={"Bienvenid@!"}
          type={"success"}
          content={`has accedido como ${username}.`}
          callback={() => setTimes(2)}/>}
    </SearchContextProvider>
  )
}
