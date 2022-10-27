import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import SaveDialog from './SaveDialog';
import { Tooltip, Zoom } from '@mui/material';

function ButtonRack() {
    const { theme } = useContext(ThemeContext);
    const { selectedCell } = useContext(SpreadSheetContext);

    const copyHandler = () => {
        let copy = selectedCell.current.value;
        selectedCell.current.select();
        document.execCommand("copy");
        window.getSelection().collapseToEnd();
        selectedCell.current.focus();
    };

    const cutHandler = () => {
        selectedCell.current.select();
        document.execCommand("cut");
        selectedCell.current.focus();
    };

    const pasteHandler = async () => {
        selectedCell.current.select();
        const paste = await navigator.clipboard.readText();
        selectedCell.current.value = paste;
        selectedCell.current.focus();
    };

    return (
        <div className="space-x-2">
            <SaveDialog/>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Copiar"} arrow>
                <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={copyHandler}><ContentCopyIcon/></button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Cortar"} arrow>
                <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={cutHandler}><ContentCutIcon/></button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Pegar"} arrow>
                <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={pasteHandler}><ContentPasteIcon/></button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Deshacer"} arrow>
                <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={()=>document.execCommand("undo")}><UndoIcon/></button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Rehacer"} arrow>
                <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={()=>document.execCommand("redo")}><RedoIcon/></button>
            </Tooltip>
        </div>
    )
}

export default ButtonRack