import { ThemeContext } from "../context/ThemeContext";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useContext } from "react";
import { Tooltip, Zoom } from "@mui/material";

function TopBarContainer(props) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const helpText = "Esta es la documentación, es el lugar indicado para venir en busca de ayuda, en esta barra de arriba hay un buscador para que puedas encontrar lo que requieres de la página. Además, en el panel lateral podrás ver un índice de contenidos con todos los tópicos de ayuda que tenemos disponibles para ti.";

  return (
      <div className={"absolute top-0 left-0 w-full" + theme.navbarBg + theme.mainText}>
        <div className="flex flex-row h-16 content-center items-center justify-between px-2 sm:px-6 lg:px-8">
          {props.children}
          <div className="flex content-center items-center justify-self-end px-4 space-x-2">
            <Tooltip TransitionComponent={Zoom} placement="bottom" title={"Cambiar tema"} arrow>
              <button onClick={toggleTheme} className={"rounded-full p-2" + theme.hoverNavbar}>
                {theme.buttonIcon}
              </button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} placement="bottom-start" title={helpText} arrow>
              <button className={"rounded-full p-2" + theme.hoverNavbar}>
                <QuestionMarkIcon className={theme.iconHover}/>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
  );
}

export default TopBarContainer