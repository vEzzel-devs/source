import { ThemeContext } from '../../context/ThemeContext'
import { SpreadSheetContext } from '../context/SpreadSheetContext';
import { useContext, useRef, useState } from 'react'
import { AutocompleteContext } from '../context/AutocompleteContext';
import TooltipCell from './TooltipCell'
import { parseCell } from "../utils/strings.js"


function Vessel({ cell }) {
  const { theme } = useContext(ThemeContext);
  const { setVal, remVal, inputBar, setSelectedCell } = useContext(SpreadSheetContext);
  //const {  } = useContext(AutocompleteContext);
  const [ addStyle, setAddStyle ] = useState("base");
  const vessel = useRef();

  const changeVal = () => {
    inputBar.current.value = vessel.current.value;
    const entry = vessel.current.value;
    

    if (entry === "") {
      remVal(vessel.current.name);
      setAddStyle("base");
      return;
    }

    let clsType="Base";
    if (entry[0] == "="){
      clsType="Math";
    }   
    else if (entry[0] == "#"){
      clsType="Data";
    }
    else if (entry[0] == "/"){
      clsType="View";
    }
    else if (entry[0] == "$"){
      clsType="Ctrl";
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
      "ref": vessel.current.name,
      "cell": {
        "cls": "Base",
        "type": entryType,
        "cont": entry,
      },
      "display": () => `${this.cell.cont}`,
      "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
    });
    setVal(vessel.current.name, value);
  };

const setInputBarOnMe = () => {
  inputBar.current.value = vessel.current.value;
  setSelectedCell(vessel);
};

  return (
    <TooltipCell cellRef={vessel} cellRow={parseCell(cell)[1]} setCls={setAddStyle}>
      <input name={cell} ref={vessel} onFocus={setInputBarOnMe} onChange={changeVal} placeholder={cell} className={"border text-center" + theme.mainBorder + theme.mainBg + theme.mainText + theme.cells[addStyle]}/>
    </TooltipCell>
  )
}

export default Vessel