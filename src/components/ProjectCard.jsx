import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ProjectCard({title, text, tags}) {
    const { theme } = useContext(ThemeContext);
    return (
      <div className="w-full flex flex-row px-2">
        <div className={"w-2/3 p-5 flex flex-col" + theme.mainBg + theme.mainText}>
          <h2
            className="text-xl lg:text-3xl xl:text-4xl">{title}
          </h2>
          <br className="lg:block hidden"/>
          <h3 className={"text-lg" + theme.lightText}>{text}</h3>
        </div>
        <div className={"w-2/3 p-5 flex flex-col" + theme.mainBg + theme.mainText}>
          {/* valoracion y tags */}
        </div>
      </div>
    )
}

export default ProjectCard