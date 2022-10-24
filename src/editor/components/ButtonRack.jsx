import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SaveDialog from './SaveDialog';

function ButtonRack() {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="space-x-2">
            <SaveDialog/>
            <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton}><ContentCopyIcon/></button>
            <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton}><ContentCutIcon/></button>
            <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton}><ContentPasteIcon/></button>
        </div>
    )
}

export default ButtonRack