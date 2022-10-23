import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import ProjectCard from "../../components/ProjectCard"

function AppContainer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll content-start" + theme.mainBg + theme.scrollbar}>
        <ProjectCard title="Hola Mundo" desc="El tipico programa para imprimir hola mundo, esta vez usando el lenguaje vEzzel! Estas son las tarjetas que recibirán la información de una spreadsheet, por lo que solo resta realizar las querys para completarlas!" user="Vicho" tags={["Aprendizaje", "Didáctico", "Tag con espacios y mucho texto", "Test", "Taaaaaaaaaaaaaaaaaaaaaaag"]} idx={0}/>
        <ProjectCard title="Hola Mundo" desc="El tipico programa para imprimir hola mundo, esta vez usando el lenguaje vEzzel! Estas son las tarjetas que recibirán la información de una spreadsheet, por lo que solo resta realizar las querys para completarlas!" user="Vicho" tags={["Aprendizaje", "Didáctico", "Tag con espacios y mucho texto", "Test", "Taaaaaaaaaaaaaaaaaaaaaaag"]} idx={1}/>
        <ProjectCard title="Hola Mundo" desc="El tipico programa para imprimir hola mundo, esta vez usando el lenguaje vEzzel! Estas son las tarjetas que recibirán la información de una spreadsheet, por lo que solo resta realizar las querys para completarlas!" user="Vicho" tags={["Aprendizaje", "Didáctico", "Tag con espacios y mucho texto", "Test", "Taaaaaaaaaaaaaaaaaaaaaaag"]} idx={2}/>
        <ProjectCard title="Hola Mundo" desc="El tipico programa para imprimir hola mundo, esta vez usando el lenguaje vEzzel! Estas son las tarjetas que recibirán la información de una spreadsheet, por lo que solo resta realizar las querys para completarlas!" user="Vicho" tags={["Aprendizaje", "Didáctico", "Tag con espacios y mucho texto", "Test", "Taaaaaaaaaaaaaaaaaaaaaaag"]} idx={3}/>
      </div>
    </div>
  )
}

export default AppContainer