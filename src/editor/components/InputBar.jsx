import DashboardToolbar from '../../components/DashboardToolbar'
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
  const quitCell = () => {
    inputBar.current.value = "";
  }

  return (
    <div className='flex flex-row rounded-lg overflow-hidden'>
        <div className={'md:px-4 border' + theme.mainBorder}>{selectedCell ? selectedCell.current.placeholder : ""}</div>
        <input ref={inputBar} onFocus={comeBackToCell} onBlur={quitCell} onChange={setCell} className={'border' + theme.mainBorder + theme.mainText}/>
    </div>
  )
}

export default InputBar;

/*
 Error, el contenido agregado o eliminado en la inputbar no actualiza sheetData
*/