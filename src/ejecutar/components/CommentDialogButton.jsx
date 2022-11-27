import { DialogContent, DialogTitle, Tooltip } from "@mui/material";
import { Dialog, DialogActions, Zoom } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from '../../context/SystemContext'
import { UserDataContext } from "../../context/UserDataContext";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { CommContext } from "../context/CommContext";
import CommentIcon from '@mui/icons-material/Comment';
import ValueStars from "./ValueStars";
import { editComm, createComm, deleteComm } from "../utils/query.js";

function CommentDialogButton() {
    const { theme } = useContext(ThemeContext);
    const { mine } = useContext(CommContext);
    const { setLoading } = useContext(SystemContext);
    const { queryComment } = useContext(UserDataContext)
    const { sheetConfig } = useContext(SpreadSheetContext);
    const [ open, setOpen ] = useState(false);
    const [ stars, setStars ] = useState(0);
    const [ op, setOp ] = useState("Publicar")
    const descRef = useRef();

    const handleOpen = () => {
        setOpen(true);
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            
            if (mine) {
                setStars(mine.score);
                descRef.current.value = mine.comment
            }else{
                setStars(0);
                descRef.current.value = "";
            }

        }
        wait();
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const handleSubmit = async () => {
        let desc = descRef?.current?.value;
        let comID = mine?._id;
        setLoading(true);
        try {
            if (op === "Editar") {
                const res  = await editComm(mine._id, desc, stars);
            } else if (op === "Publicar") {
                const res  = await createComm(desc, stars);
                comID = res.id;
            } else {
                const res  = await deleteComm(mine._id);
            }
            queryComment(({
                "_id": comID,
                comment: desc,
                score: stars,
                spreadname: sheetConfig.title,
                "spread_id": sheetConfig.id,
            }), op);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
        setLoading(false);
        setOpen(false);
    };

    const updateOp = async () => {
        await new Promise(r => setTimeout(r, 10));
        let desc = descRef?.current?.value;
        if (stars === 0 && desc === "" && mine) {
            setOp("Eliminar");
        } else if(!mine){
            setOp("Publicar");
        } else {
            setOp("Editar");
        }
    }

    useEffect(() => {
        updateOp();
    }, [open, stars]);

    return (
        <>
            <button className={"w-full p-3 rounded-lg space-x-2 flex flex-row justify-center border" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleOpen}><CommentIcon/><p>Comentar</p></button>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Publica tu opinión!</DialogTitle>
                <DialogContent>
                    <ValueStars stars={stars} setStars={setStars}/>
                    <textarea id='desc' ref={descRef} className={"font-mono p-2 mb-2 h-32 w-full md:w-96 outline-0 border-2 overflow-y-scroll resize-none" + theme.mainBg + theme.mainText + theme.borderNavbar + theme.scrollbar} placeholder="Redacta una reseña" onChange={updateOp} style={{fontFamily: "Cascadia Code"}}/>
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={handleCancel} style={{fontFamily: "Cascadia Code"}}>Cancelar</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>{op}</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default CommentDialogButton