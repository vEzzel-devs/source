import { ThemeContext } from '../../context/ThemeContext'
import { SpreadSheetContext } from '../../context/SpreadSheetContext';
import { useContext, useRef, useEffect, useState } from 'react'
import { baseChar, rBaseChar } from "../utils/numbers.js";
import { parseCell } from "../utils/strings.js";
import { keydownHelper } from '../utils/helpers';
import Vessel from '../components/Vessel';
import Column from '../components/Column';
import Row from '../components/Row';


function SpreadSheet() {
  const { theme } = useContext(ThemeContext);
  const { sheetDim, sheetData, setDim, selectedCell, setNextCell } = useContext(SpreadSheetContext);
  const [ cells, setCells ] = useState([[<Vessel key={"A1"} cell={"A1"}/>],]);
  const [ cols, setCols ] = useState([<Column key={"col-key-A"} val={"A"}/>]);
  const [ rows, setRows ] = useState([<Row key={"row-key-1"} val={"1"}/>]);
  
  const cellsLoad = () => {
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
    let finalCells = (newCells.map((arr, col) => {
      if (oldCells.length > col) {
        return [...oldCells[col], ...arr].slice(0, sheetDim[1]);
      } else {
        return arr.slice(0, sheetDim[1]);
      }
    }).slice(0, sheetDim[0]));
    setCells(finalCells);
    setCols(finalCells.map((_, idx) => {
      let col = baseChar(idx);
      return <Column key={"col-key-" + col} val={col}/>;
    }).slice(0, sheetDim[0]))
    setRows(finalCells[0].map((_, idx) => {
      let row = `${idx + 1}`;
      return <Row key={"row-key-" + row} val={row}/>;
    }).slice(0, sheetDim[1]));
  };

  const dynamicResize = () => {
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
  };

  

  useEffect(() => {
    cellsLoad();
  }, [sheetDim]);

  useEffect(() => {
    dynamicResize();
  }, [sheetData, theme]);

  document.onkeydown = (event) => {
    let changeToCell = keydownHelper(sheetDim, selectedCell.current.id, event);
    if (changeToCell) {
      setNextCell(changeToCell);
    }
  }

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full flex flex-nowrap flex-row items-start overflow-scroll" + theme.mainBg + theme.scrollbar}>
        <div className="max-w-[2rem] min-w-[2rem] flex flex-col">
          <Row key={"0"} val={"N°"}/>
          {rows}
        </div>
        {cols.map((col, index) => {
          return (
            <div key={`col-id-${index}-for-${col}`} className="max-w-[8rem] min-w-[8rem] flex flex-col">
              {col}
              {cells[index]}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SpreadSheet