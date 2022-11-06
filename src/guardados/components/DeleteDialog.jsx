import { DialogTitle, DialogContent, Zoom } from "@mui/material";
import { Dialog, Tooltip, DialogActions } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { UserDataContext } from "../../context/UserDataContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { removespread } from "../utils/query.js";

function DeleteDialog({itemId, itemName, idx, takeMeOut}) {
    const { theme } = useContext(ThemeContext);
    const { setLoading } = useContext(SystemContext);
    const { setIsLatest } = useContext(UserDataContext)
    const { sheetConfig, restartSheet } = useContext(SpreadSheetContext);
    const [ open, setOpen ] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        let res = await removespread(itemId);
        if (sheetConfig.id === itemId) {
            setIsLatest(false);
            restartSheet();
        }
        setLoading(false);
        setOpen(false);
        takeMeOut();
    };

    return (
        <>
            <div className={"flex content-start p-2 items-start" + (idx % 2 === 1 ? theme.mainBg : theme.highBg)}>
                <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Eliminar"} arrow>
                    <button className={"h-8" + theme.primaryText} onClick={()=>setOpen(true)}><DeleteOutlineIcon/></button>
                </Tooltip>
            </div>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>Eliminar proyecto</DialogTitle>
                <DialogContent>
                    <h3 className={"font-mono text-lg" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        Estás segur@ de querer eliminar el proyecto "{itemName}"?
                    </h3>
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={()=>setOpen(false)} style={{fontFamily: "Cascadia Code"}}>Cancelar</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>Confirmar</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default DeleteDialog