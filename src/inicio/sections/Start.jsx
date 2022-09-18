import { ThemeContext } from '../../context/ThemeContext'
import { useState, useContext } from 'react'
import Carousel from "../components/Carousel";

function Start() {
  const [count, setCount] = useState(0);
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="start">
      <div className="md:container md:mx-auto">
        <Carousel/>
      </div>
    </section>
  )
}

export default Start
