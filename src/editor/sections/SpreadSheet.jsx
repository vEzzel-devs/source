import { ThemeContext } from '../../context/ThemeContext'
import { SpreadSheetContext } from '../context/SpreadSheetContext';
import { useContext, useRef, useEffect, useState } from 'react'
import { baseChar } from "../utils/numbers.js";
import Vessel from '../components/Vessel';

function SpreadSheet() {
  const { theme } = useContext(ThemeContext);
  const { sheetDim, addDim } = useContext(SpreadSheetContext);
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
        return [...oldCells[col], ...arr];
      } else {
        return arr;
      }
    }));
  }, [sheetDim]);

  return (
    <div className="max-w-screen w-screen max-h-screen h-screen">
      <div className="flex flex-nowrap flex-row">
        <button className={"rounded-lg p-4" + theme.primaryButton} onClick={() => addDim(0, 1)}>Add a row</button>
        <button className={"rounded-lg p-4" + theme.secondaryButton} onClick={() => addDim(1, 0)}>Add a col</button>
      </div>
      <div className={"w-7/8 m-auto flex flex-nowrap flex-row items-start"}>
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