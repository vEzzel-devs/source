import { useContext, useState } from "react";
import { SpreadSheetContext } from "../context/SpreadSheetContext";
import { AutocompleteContext } from '../context/AutocompleteContext';
import { ThemeContext } from "../../context/ThemeContext";

function TooltipAC(props) {
    const { theme } = useContext(ThemeContext);
    const { selectedCell } = useContext(SpreadSheetContext)
    const {getAC } = useContext(AutocompleteContext);
    const [status, setStatus] = useState(undefined);


    const setValue = (newchar) => {
        setStatus(undefined);
        selectedCell.current.value = selectedCell.current.value[0]+newchar;
        selectedCell.current.focus();
    };

    const getList = () =>{
      let entry = selectedCell.current.value;
      let array = getAC(entry[0], entry.substring(1));
      
      let themeBtt = theme.cells.base;
      if (entry[0]=== '='){
        themeBtt = theme.cells.math;
      }else if(entry[0]=== '/'){
        themeBtt = theme.cells.view;
      }else if(entry[0]=== '#'){
        themeBtt = theme.cells.data;
      }else if(entry[0]=== '$'){
        themeBtt = theme.cells.ctrl;
      }

      try {
        return(
          array.map((content) => {
            return <button onClick={() => setValue(content.value)} className={"py-2" + themeBtt + theme.mainText}>{content.func}</button>
          })    
        )
      } catch (error) {
        return(
          <button onClick={() => setValue("")} className={"py-2" + themeBtt + theme.mainText}></button>
        )
      }



    }

    return (
        <div className="relative w-[126px] flex flex-col" onClick={() => setStatus(props.cellRef)} onMouseLeave={() => setStatus(undefined)}>
            {props.children}
            {status === selectedCell && (selectedCell.current.value !== "") && (selectedCell.current.value.includes("(")===false) && <div role="tooltip" className={"z-20 w-[126px] absolute left-auto rounded-lg overflow-hidden" + ("1 2 3".includes(props.cellRow) ? " mt-[25px]" : "top-0 mt-[25px]")}>
                <div>
                {getList()}
                </div>
            </div>}
        </div>
    );
}

export default TooltipAC;