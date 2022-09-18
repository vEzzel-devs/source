import { CarrouselContextProvider } from './context/CarrouselContext';
import './Layout.css'
import Navbar from './components/Navbar'
import Start from './sections/Start';
import Login from './sections/Login';
import Docs from './sections/Docs';
import About from './sections/About';

function Layout() {
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

export default Layout