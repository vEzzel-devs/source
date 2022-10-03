import { useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext'
import { RouteContext } from './context/RouteContext'
import { Route, Routes } from 'react-router-dom';

function App() {
  const { theme } = useContext(ThemeContext);
  const { allRoutes } = useContext(RouteContext);

  useEffect(() => {
    let localDim = JSON.parse(localStorage.getItem('sheetDim'));
        if (localDim) {
            localStorage.removeItem('sheetDim');
        }
        let localData = JSON.parse(localStorage.getItem('sheetData'));
        if (localData) {
          localStorage.removeItem('sheetData');
        }
        let localCells = JSON.parse(localStorage.getItem('sheetCells'));
        if (localCells) {
          localStorage.removeItem('sheetCells');
        }
  }, []);

  useEffect(() => {
    let icon = document.getElementById('icon');
    if (icon) {
      icon.href = theme.folder + "/icon.png"
    }
  }, [theme]);

  return (
    <Routes>
      {allRoutes.map((page) => {
        return <Route exact path={page.url} element={page.comp}/>;
      })}
    </Routes>
  );
}


export default App