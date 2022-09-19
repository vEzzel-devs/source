import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import Vezzel from '../../components/Vezzel';

function Docs() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={theme.mainBg} id="docs">
      <div className="w-full">
        <div className="flex justify-between transform px-8 top-1/2 w-full">
          <div className="w-1/3 m-auto">
            <h1 className={"text-4xl" + theme.mainText}>Aprende <Vezzel/> hoy!</h1>
            <br/>
            <h3 className={"text-lg" + theme.lightText}>Accede a la página de documentación de <Vezzel/> para adquirir todo el conocimiento, así como consejos que te serán de mucha ayuda para desarrollar buenas aplicaciones en esta plataforma.</h3>
            <br/>
            <div className="mx-auto flex justify-end">
              <button className={"md:w-1/3 p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.primaryButton}>A aprender!</button>
            </div>
          </div>
          <div className="w-1/2 max-h-screen h-screen flex items-center">
            <img src={"placeholder6.png"} className="w-full"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Docs
