import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Card from '../components/Card';
import Vezzel from '../../components/Vezzel'
import ContainerBox from '../../components/ContainerBox'

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="about">
      <div className={"w-full max-h-screen h-screen flex flex-col items-center" + theme.secondaryBg}>
        <ContainerBox>
          <div className="flex justify-center">
            <h1 className={"text-4xl" + theme.mainText}>El equipo <Vezzel/></h1>
          </div>
          <br/>
          <div className="flex md:flex-row flex-col justify-center content-center md:px-16 gap-4 place-content-center">
            <Card name="Vicente González" text="Desarrollador full stack."/>
            <Card name="Hernán Moreno" text="Desarrollador full stack."/>
            <Card name="Yerko Sepúlveda" text="Desarrollador full stack."/>
          </div>
        </ContainerBox>
      </div>
    </section>
  )
}

export default About
