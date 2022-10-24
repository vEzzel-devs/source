import { ThemeContext } from '../../context/ThemeContext'
import React,{ useContext } from 'react'
import { SpreadSheetContext } from '../context/SpreadSheetContext';


function InputBar() {
  const { theme } = useContext(ThemeContext);
  const { setVal, remVal, inputBar, selectedCell, setSelectedCell } = useContext(SpreadSheetContext);

  const comeBackToCell = () => {
    inputBar.current.value = selectedCell.current.value;
  };
  const setCell = () => {
    if (selectedCell) {
      selectedCell.current.value = inputBar.current.value;
    }
  };


  document.onkeydown = (e) => {
    e = e || window.event;
    var ek = e.key;
    if (e.ctrlKey && ek === "ArrowLeft" && !e.shiftKey) {
      e.preventDefault();
      console.log("Left");

      let col = parseCell(selectedCell.current.id)[0].charCodeAt(0);
      let new_col;
      col === 65
        ? (new_col = String.fromCharCode(col))
        : (new_col = String.fromCharCode(col - 1));

      console.log(new_col + parseCell(selectedCell.current.id)[1]);

      //setSelectedCell(selectedCell.current.id, new_col + parseCell(selectedCell.current.id)[1]);
    
    
    } else if (e.ctrlKey && ek === "ArrowUp" && !e.shiftKey) {
      e.preventDefault();
      console.log("Up");
      let row = Number(parseCell(selectedCell.current.id)[1]);
      let new_row;
      row === 1 ? (new_row = row) : (new_row = row - 1);

      console.log(parseCell(selectedCell.current.id)[0] + new_row);
    
    
    } else if (e.ctrlKey && ek === "ArrowRight" && !e.shiftKey) {
      e.preventDefault();
      console.log("Right");
      let col = parseCell(selectedCell.current.id)[0].charCodeAt(0);
      let new_col;
      col === 90
        ? (new_col = String.fromCharCode(col))
        : (new_col = String.fromCharCode(col + 1));//ahora no pasa de la Z

      console.log(new_col + parseCell(selectedCell.current.id)[1]);
    
    
    } else if (e.ctrlKey && ek === "ArrowDown" && !e.shiftKey) {
      e.preventDefault();
      console.log("Down");
      let row = Number(parseCell(selectedCell.current.id)[1]);
      let new_row;
      row === 1 ? (new_row = row) : (new_row = row + 1);

      console.log(parseCell(selectedCell.current.id)[0] + new_row);
    
    }
  };

  return (
    <div className={'w-1/2 flex flex-row rounded-lg overflow-hidden border' + theme.mainBorder}>
        <div className='md:px-4'>{selectedCell ? selectedCell.current.placeholder : ""}</div>
        <input ref={inputBar} onFocus={comeBackToCell} onChange={setCell} className={"px-2 w-full outline-0" + theme.mainBg + theme.mainText}/>
    </div>
  )
}

export default InputBar;

