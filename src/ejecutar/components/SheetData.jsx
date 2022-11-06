import { useContext } from "react";
import DoubleStars from "../../components/DoubleStars";
import { ThemeContext } from "../../context/ThemeContext";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
function SheetData() {
    const { theme } = useContext(ThemeContext);
    const { sheetConfig } = useContext(SpreadSheetContext)
    
    return (
      <div className={"h-full flex flex-col justify-start" + theme.mainText}>
        <div className="w-full pt-1 px-2 md:px-4 flex flex-row justify-between">
          <h1 className="text-2xl md:text-3xl">{sheetConfig.title}</h1>
          <DoubleStars value={sheetConfig.score}/>
        </div>
        <div className={"w-full h-full mt-3 px-2 md:px-4 flex flex-row overflow-y-scroll" + theme.scrollbar}>
          <p className={"text-sm md:text-md" + theme.lightText}>{sheetConfig.desc}</p>
        </div>
      </div>
    )
}

export default SheetData