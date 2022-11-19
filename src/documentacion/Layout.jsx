import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

export function Layout() {
  const { theme } = useContext(ThemeContext);
  
  window.onhashchange = function () {
    history.pushState(null, "", window.location.pathname);
  }

  return (
    <>
      <div ref={body} className={"h-screen overflow-y-scroll" + theme.scrollbar} onScroll={scrollHandler}>
        {/* TO DO */}
      </div>
    </>
  )
}