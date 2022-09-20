import { useEffect, useContext } from 'react';
import { ThemeContext } from './context/ThemeContext'
import Layout from './inicio/Layout'

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    let icon = document.getElementById('icon');
    if (icon) {
      icon.href = theme.folder + "/icon.png"
    }
  }, [theme]);

  return <Layout />;
}


export default App