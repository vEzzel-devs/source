import { useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext'
import { RouteContext } from './context/RouteContext'
import { Route } from 'react-router-dom';

function App() {
  const { theme } = useContext(ThemeContext);
  const { allRoutes } = useContext(RouteContext);

  useEffect(() => {
    let icon = document.getElementById('icon');
    if (icon) {
      icon.href = theme.folder + "/icon.png"
    }
  }, [theme]);

  return (
    <>
      {allRoutes.map((page) => {
        return <Route exact path={page.url} element={page.comp}/>;
      })}
    </>
  );
}


export default App