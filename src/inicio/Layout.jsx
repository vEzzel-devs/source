import { CarrouselContextProvider } from './context/CarrouselContext';
import Navbar from './components/Navbar'
import Start from './sections/Start';
import Login from './sections/Login';
import Docs from './sections/Docs';
import About from './sections/About';

export function Layout() {
  return (
    <CarrouselContextProvider>
      <Navbar/>
      <Start/>
      <Login/>
      <Docs/>
      <About/>
    </CarrouselContextProvider>
  )
}