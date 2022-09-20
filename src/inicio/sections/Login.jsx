import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from '../../components/Vezzel';
import ContainerBox from '../../components/ContainerBox';


function Login() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="login">
      <div className={"w-full" + theme.primaryBg}>
        <ContainerBox>
          <div className="w-2/3 mx-auto">
            <h1 className={"text-4xl" + theme.mainText}>Hora de comenzar!</h1>
            <br/>
            <h3 className={"text-lg" + theme.lightText}>Empieza a desarrollar con el editor low-code de <Vezzel/> y ejecuta tus aplicaciones desde un solo lugar. Regístrate en nuestra plataforma o accede con tu cuenta si ya te has registrado.</h3>
            <br/>
          </div>
          <div className="w-2/3 mx-auto flex justify-end">
            <button className={"md:w-1/8 mr-2 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.secondaryButton}>Regístrate</button>
            
            <button className={"md:w-1/8 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.primaryButton}>Inicia sesión</button>

          </div>
        </ContainerBox>
      </div>
    </section>
  )
}

export default Login
