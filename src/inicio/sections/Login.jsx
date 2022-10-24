import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from '../../components/Vezzel';
import ContainerBox from '../../components/ContainerBox';
import SessionRegister from '../components/SessionRegister';
import SessionLogger from '../components/SessionLogger';


function Login() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="login">
      <div className={"w-full p-4" + theme.primaryBg}>
        <ContainerBox>
          <div className="md:w-2/3 px-8 mx-auto">
            <h1 className={"text-4xl" + theme.mainText}>Hora de comenzar!</h1>
            <br/>
            <h3 className={"text-lg" + theme.lightText}>Empieza a desarrollar con el editor low-code de <Vezzel/> y ejecuta tus aplicaciones desde un solo lugar. Regístrate en nuestra plataforma o accede con tu cuenta si ya te has registrado.</h3>
            <br/>
          </div>
          <div className="md:w-2/3 md:mx-auto flex justify-center md:justify-end">
            <SessionRegister/>
            <SessionLogger/>
          </div>
        </ContainerBox>
      </div>
    </section>
  )
}

export default Login
