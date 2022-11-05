import { CarrouselContextProvider } from './context/CarrouselContext';
import { SystemContext } from '../context/SystemContext'
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import LoadingScreen from '../components/LoadingScreen'
import Navbar from './components/Navbar'
import Start from './sections/Start';
import Login from './sections/Login';
import Docs from './sections/Docs';
import About from './sections/About';

export function Layout() {

  const { loading } = useContext(SystemContext);
  const { theme } = useContext(ThemeContext);

  return (
    <CarrouselContextProvider>
      <div className={"h-screen overflow-y-scroll" + theme.scrollbar}>
        <Navbar/>
        <Start/>
        <Login/>
        <Docs/>
        <About/>
      </div>
      {loading && <LoadingScreen/>}
    </CarrouselContextProvider>
  )
}