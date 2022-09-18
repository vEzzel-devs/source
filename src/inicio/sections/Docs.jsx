import { ThemeContext } from '../../context/ThemeContext'
import { useState, useContext } from 'react'

function Docs() {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="docs">
      <></>
    </section>
  )
}

export default Docs
