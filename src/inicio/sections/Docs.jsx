import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Vezzel from '../../components/Vezzel';

function Docs() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <section className={theme.mainBg} id="docs">
      <div className="w-full h-screen flex flex-col space-y-2 p-4 items-center justify-center">
        <h1 className={"text-4xl" + theme.mainText}>Aprende <Vezzel/> hoy!</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 md:m-auto space-y-2">
            <h3 className={"text-lg" + theme.lightText}>Accede a la página de documentación de <Vezzel/> para adquirir todo el conocimiento, así como consejos que te serán de mucha ayuda para desarrollar buenas aplicaciones en esta plataforma.</h3>
            <div className="mx-auto flex justify-center md:justify-end">
              <button onClick={() => navigate("/docs")} className={"w-full md:w-fit p-2 rounded-lg border-4" + theme.mainText + theme.mainBg + theme.primaryButton}>A aprender!</button>
            </div>
          </div>
          <div className="w-1/2 flex items-center hidden md:block">
            <img src={"placeholder6.png"} className="w-full"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Docs
