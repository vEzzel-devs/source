import { ThemeContext } from '../../context/ThemeContext'
import { SpreadSheetContext } from '../context/SpreadSheetContext';
import { useContext, useRef, useEffect, useState } from 'react'
import { baseChar } from "../utils/numbers.js";
import { parseCell } from "../utils/strings.js";
import Vessel from '../components/Vessel';


function SpreadSheet() {
  const { theme } = useContext(ThemeContext);
  const { sheetDim, sheetData, setDim } = useContext(SpreadSheetContext);
  const [ cells, setCells ] = useState([[<Vessel key={"A1"} cell={"A1"}/>],]);
  
  useEffect(() => {
    let oldCells = [...cells];
    let newCells = oldCells.map(() => []);
    let children = oldCells.map((col) => {
      return col.map((cell) => cell.key);
    });
    
    for (let col = 0; col < sheetDim[0]; col++) {
      let column = baseChar(col);
      if (col >= oldCells.length) {
        children = [...children, []];
        newCells = [...newCells, []];
      }
      for (let row = 1; row <= sheetDim[1]; row++) {
        let cell = column + row;
        if (!children[col].includes(cell)) {
          newCells[col] = [
            ...newCells[col],
            <Vessel key={cell} cell={cell}/>
          ]
        }
      }
    }

    setCells(newCells.map((arr, col) => {
      if (oldCells.length > col) {
        return [...oldCells[col], ...arr].slice(0, sheetDim[1]);
      } else {
        return arr.slice(0, sheetDim[1]);
      }
    }).slice(0, sheetDim[0]));
  }, [sheetDim]);

  useEffect(() => {
    let newDim = [...sheetDim]
    let less = true;
    sheetData.forEach((element) => {
      let [ x, y ] = parseCell(element.ref)
      if (baseChar(newDim[0]-1) === x) {
        newDim[0] += 1;
        less = false;
      }
      if (`${newDim[1]}` === y) {
        newDim[1] += 1;
        less = false;
      }
    });
    let notEqual = !less;
    while (less) {
      let [ eq1, eq2 ] = [true, true];
      sheetData.forEach((element) => {
        let [ x, y ] = parseCell(element.ref)
        let col = newDim[0]-1 > 0 ? newDim[0]-1 : 1;
        if (col < 6 || baseChar(col - 1) === x) {
          eq1 = false;
        }
        if (newDim[1]-1 < 8 || `${newDim[1] - 1}` === y) {
          eq2 = false;
        }
      });
      less = eq1 || eq2;
      if (less) { notEqual = true; }
      if (eq1) { newDim[0] -= 1; }
      if (eq2) { newDim[1] -= 1; }
    }
    if (notEqual) {
      setDim(newDim[0], newDim[1]);
    }
  }, [sheetData]);

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full flex flex-nowrap flex-row items-start overflow-scroll" + theme.mainBg + theme.scrollbar}>
        {cells.map((column) => {
          return (
            <div className="max-w-[8rem] min-w-[8rem] flex flex-col">
              {column}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SpreadSheet