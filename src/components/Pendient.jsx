import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from './Vezzel';

function Pendient() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"w-full h-full flex items-center justify-center" + theme.primaryBg}>
      <div className={"md:w-3/5 px-2 md:px-8 py-4 md:py-16 rounded-lg flex flex-col items-start justify-center" + theme.mainBg}>
        <div className={"mb-4 text-3xl md:text-5xl" + theme.mainText}>Página en construcción</div>
        <div className={"text-xl md:text-2xl" + theme.lightText}>La página en la que te encuentras actualmente, está en construcción por el equipo de <Vezzel/> para que luego puedas disfrutar de los servicios que esta ofrece!</div>
      </div>
    </div>
  )
}

export default Pendient