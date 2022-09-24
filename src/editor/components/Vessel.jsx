import { ThemeContext } from '../../context/ThemeContext'
import { SpreadSheetContext } from '../context/SpreadSheetContext';
import { useContext, useRef } from 'react'

function Vessel({ cell }) {
  const { theme } = useContext(ThemeContext);
  const { setVal, remVal } = useContext(SpreadSheetContext);
  const vessel = useRef();

  const changeVal = () => {
    const entry = vessel.current.value;
    if (entry === "") {
      remVal(vessel.current.name);
      return;
    }
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
        "cls": "Basic",
        "type": entryType,
        "cont": entry,
      },
      "display": () => `${this.cell.cont}`,
      "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
    });
    setVal(vessel.current.name, value);
  };

  return (
    <>
      <input name={cell} ref={vessel} onChange={changeVal} placeholder={cell} className={"border text-center" + theme.mainBorder + theme.mainBg}/>
    </>
  )
}

export default Vessel