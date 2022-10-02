import { ThemeContext } from '../../context/ThemeContext'
import { SpreadSheetContext } from '../context/SpreadSheetContext';
import { useContext, useState, useRef } from 'react'
import { AutocompleteContext } from '../context/AutocompleteContext';
import TooltipCell from './TooltipCell'
import TooltipAC from './TooltipAC'
import { parseCell } from "../utils/strings.js"


function Vessel({ cell }) {
  const { theme } = useContext(ThemeContext);
  const { setVal, remVal, inputBar, setSelectedCell } = useContext(SpreadSheetContext);
  const { getAC } = useContext(AutocompleteContext);
  const [ addStyle, setAddStyle ] = useState("base");
  const vessel = useRef()

  const changeVal = () => {
    inputBar.current.value = vessel.current.value;
    const entry = vessel.current.value;
    
    let clsType="base";

    if (entry === "") {
      remVal(vessel.current.id);
      setAddStyle(clsType);
      return;
      
    }else{    
      if (entry[0] == "="){
      clsType="math";
      }   
      else if (entry[0] == "#"){
        clsType="data";
      }
      else if (entry[0] == "/"){
        clsType="view";
      }
      else if (entry[0] == "$"){
        clsType="ctrl";
      }
      setAddStyle(clsType);
    }



    // esto solo aplica a Base
    let entryType = "";
    if (isNaN(entry)) {
      entryType = "String";
    } else {
      if (entry.includes(".")) {
        entryType = "Float";
      } else {
        entryType = "Integer";
      }
    }
    const value = ({
      "ref": vessel.current.id,
      "cell": {
        "cls": clsType,
        "type": entryType,
        "cont": entry,
      },
      "display": () => `${this.cell.cont}`,
      "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
    });
    setVal(vessel.current.id, value);
  };

const setInputBarOnMe = () => {
  inputBar.current.value = vessel.current.value;
  setSelectedCell(vessel);
};

  return (
    <TooltipCell cellRef={vessel} cellRow={parseCell(cell)[1]} setCls={setAddStyle}>
        <input id={cell} ref={vessel} onFocus={setInputBarOnMe} onChange={changeVal} placeholder={cell} className={"border text-center" + theme.mainBorder + theme.mainBg + theme.mainText + theme.cells[addStyle]}/>
    </TooltipCell>
  )
}

export default Vessel