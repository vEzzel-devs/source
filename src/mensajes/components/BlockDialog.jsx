import { DialogTitle, DialogContent, Zoom } from "@mui/material";
import { Dialog, Tooltip, DialogActions } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from "../../context/SystemContext";
import { MsgContext } from "../context/MsgContext";
import BlockIcon from '@mui/icons-material/Block';
import { blockChat } from "../utils/query.js";

function BlockDialog() {
    const { theme } = useContext(ThemeContext);
    const { chat, active } = useContext(MsgContext);
    const { setLoading } = useContext(SystemContext);
    const [ open, setOpen ] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        let target = chat[active]?.username;
        let res = await blockChat(target);
        setLoading(false);
        setOpen(false);
        takeMeOut();
    };

    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={"Bloquear"} arrow>
                <button className={" h-1/4 mt-4 ml-2 cursor-pointer" + theme.primaryText} onClick={() => setOpen(true)}><BlockIcon/></button>
            </Tooltip>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>Bloquear usuario</DialogTitle>
                <DialogContent>
                    <h3 className={"font-mono text-lg" + theme.lightText} style={{fontFamily: "Cascadia Code"}}>
                        Esta opción no de puede deshacer, está segur@ que quiere bloquear al usuario {chat[active]?.username} ?
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
export default BlockDialog