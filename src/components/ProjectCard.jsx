import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ProjectCard({key, title, desc, user, tags, idx}) {
    const { theme } = useContext(ThemeContext);
    return (
      <div key={key} className="w-full h-2/5 flex flex-row px-2 cursor-pointer">
        <div className={"md:w-2/3 py-5 pl-4 flex flex-row md:flex-col" + (idx % 2 === 0 ? theme.mainBg : theme.highBg) + theme.mainText}>
          <h2 className="text-xl md:text-2xl xl:text-4xl">{title}{user ? <em className={"text-lg"}> por {user}</em> : ""}</h2>
          <br className="md:block hidden"/>
          <h3 className={"text-sm" + (idx % 2 === 0 ? theme.lightText : theme.mainText)}>{desc}</h3>
        </div>
        <div className={"md:w-1/3 py-5 pr-4 flex flex-row md:flex-col" + (idx % 2 === 0 ? theme.mainBg : theme.highBg) + theme.mainText}>
          <div className="flex self-start">
            {/* Valoracion */}
          </div>
          <div className="h-full flex items-end content-end">
            <div className="flex flex-wrap justify-end">
              {tags.map((tag) => {
                return (
                  <div key={`key-for-value${tag}`} className={"m-1 p-1 rounded-md text-sm" + theme.primaryAccent + theme.invText}>{tag}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProjectCard