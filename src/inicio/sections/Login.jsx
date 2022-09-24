import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from '../../components/Vezzel';
import ContainerBox from '../../components/ContainerBox';
import { Link } from 'react-router-dom';


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
            {/*<button className={"md:w-1/8 mr-2 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.secondaryButton}>Regístrate</button>
            
            <button className={"md:w-1/8 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.primaryButton}>Inicia sesión</button>*/}
            <Link to={"/editor"}>
              <button className={"md:w-1/8 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.primaryButton}>Ingresar</button>
            </Link>
          </div>
        </ContainerBox>
      </div>
    </section>
  )
}

export default Login
