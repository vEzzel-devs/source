import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SpreadSheetContext } from "../context/SpreadSheetContext";
import { ThemeContext } from "../context/ThemeContext";
import DoubleStars from "../components/DoubleStars";

function ProjectCard({title, desc, user, tags, score, idx, sheetId, sheetCont, route}) {
    const { theme } = useContext(ThemeContext);
    const { setSheetDim, setSheetData, setSheetConfig } = useContext(SpreadSheetContext);
    const navigate = useNavigate();

    const clickHandler = () => {
      let sheet = JSON.parse(sheetCont);
      let config = JSON.stringify({
        id: sheetId,
        title,
        desc,
        tags,
        score
      });
      setSheetDim(JSON.parse(sheet.shape));
      setSheetData(JSON.parse(sheet.cont));
      setSheetConfig(JSON.parse(config));
      navigate(route);
    };

    return (
      <div className="w-full h-full flex cursor-pointer" onClick={clickHandler}>
        <div className={"md:w-2/3 py-5 pl-4 flex flex-row md:flex-col" + (idx % 2 === 1 ? theme.mainBg : theme.highBg) + theme.mainText}>
          <h2 className="text-xl md:text-2xl xl:text-4xl">{title}{user ? <em className={"text-lg"}> por {user}</em> : ""}</h2>
          <br className="md:block hidden"/>
          <h3 className={"text-sm" + (idx % 2 === 1 ? theme.lightText : theme.mainText)}>{desc}</h3>
        </div>
        <div className={"md:w-1/3 py-5 pr-4 flex flex-row md:flex-col" + (idx % 2 === 1 ? theme.mainBg : theme.highBg) + theme.mainText}>
          <div className="flex self-start">
            <DoubleStars value={score}/>
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