import { CarrouselContextProvider } from './context/CarrouselContext';
import { SystemContext } from '../context/SystemContext'
import { ThemeContext } from '../context/ThemeContext';
import { useContext, useRef, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen'
import Navbar from './components/Navbar'
import Start from './sections/Start';
import Login from './sections/Login';
import Docs from './sections/Docs';
import About from './sections/About';

export function Layout() {

  const { loading } = useContext(SystemContext);
  const { theme } = useContext(ThemeContext);
  const [ page, setPage ] = useState(0);
  const body = useRef();
  
  window.onhashchange = function () {
    history.pushState(null, "", window.location.pathname);
  }

  const scrollHandler = () => {
    let mh = window.screen.height;
    let st = body.current.scrollTop + mh / 1.5;
    let screen = Math.floor(st / mh);
    if (screen != page) {
      setPage(screen);
    }
  }

  return (
    <CarrouselContextProvider>
      <div ref={body} className={"h-screen overflow-y-scroll" + theme.scrollbar} onScroll={scrollHandler}>
        <Navbar current={page}/>
        <Start/>
        <Login/>
        <Docs/>
        <About/>
      </div>
      {loading && <LoadingScreen welcome={true}/>}
    </CarrouselContextProvider>
  )
}