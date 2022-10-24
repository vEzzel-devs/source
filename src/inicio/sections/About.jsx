import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Card from '../components/Card';
import Vezzel from '../../components/Vezzel'
import ContainerBox from '../../components/ContainerBox'

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="about">
      <div className={"w-full h-screen flex flex-col justify-center items-center p-2 md:p-4" + theme.secondaryBg}>
        <ContainerBox>
          <div className="p-2 md:px-6 md:py-4 flex justify-center items-center">
            <h1 className={"text-4xl text-center" + theme.mainText}>El equipo <Vezzel/></h1>
          </div>
          <br/>
          <div className="flex lg:flex-row flex-col items-center justify-center px-2 lg:px-16 lg:space-x-4 space-y-2">
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
