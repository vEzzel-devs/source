import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Card({name}) {
    const { theme } = useContext(ThemeContext);
    return (
      <div className="w-1/3 mx-auto flex flex-col">
        <div className="md:my-auto md:px-4 md:py-8 py-4 text-center flex md:flex-col flex-row">
          <h1 className={"text-4xl" + theme.mainText}>{name}</h1>
          <br className="md:block hidden"/>
          <h3 className={"text-lg md:block hidden" + theme.lightText}>Desarrollador full stack.</h3>
        </div>
      </div>
    )
}

export default Card