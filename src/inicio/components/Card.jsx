import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Card({name, text}) {
    const { theme } = useContext(ThemeContext);
    return (
      <div className={"max-w-sm rounded overflow-hidden shadow-lg lg:items-center m-auto" + theme.secondaryAccent + theme.primaryText}>
        <img
          className="w-full object-cover lg:block hidden"
          src="imagen_gatos.jpg"
          alt="foto de gatos"
        />
        <div className="p-5 flex flex-col">
          <h2
            className="text-xl lg:text-3xl xl:text-4xl">{name}
          </h2>
          <br className="lg:block hidden"/>
          <h3 className={"text-lg" + theme.mainText}>{text}</h3>
        </div>
      </div>
    )
}

export default Card