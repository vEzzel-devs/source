import { ThemeContext } from '../../context/ThemeContext'
import { useState, useContext } from 'react'

function About() {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="about">
      <></>
    </section>
  )
}

export default About
