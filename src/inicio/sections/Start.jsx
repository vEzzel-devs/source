import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Carousel from "../components/Carousel";

function Start() {
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
