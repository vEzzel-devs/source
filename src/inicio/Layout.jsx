import { CarrouselContextProvider } from './context/CarrouselContext';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import Navbar from './components/Navbar'
import Start from './sections/Start';
import Login from './sections/Login';
import Docs from './sections/Docs';
import About from './sections/About';

export function Layout() {

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
    </CarrouselContextProvider>
  )
}