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

  return (
    <div className={'w-1/2 flex flex-row rounded-lg overflow-hidden border' + theme.mainBorder}>
        <div className='md:px-4'>{selectedCell ? selectedCell.current.placeholder : ""}</div>
        <input ref={inputBar} onFocus={comeBackToCell} onChange={setCell} className={"px-2 w-full outline-0" + theme.mainBg + theme.mainText}/>
    </div>
  )
}

export default InputBar;

