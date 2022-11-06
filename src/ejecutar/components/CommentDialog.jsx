import { DialogContent, DialogTitle, Tooltip } from "@mui/material";
import { Dialog, DialogActions, Zoom } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SystemContext } from '../../context/SystemContext'
import CommentIcon from '@mui/icons-material/Comment';
import ValueStars from "./ValueStars";
import {editComm,getUserSpreadComm,createComm,deleteComm} from "../utils/query";

function CommentDialog() {
    const { theme } = useContext(ThemeContext);
    const [ open, setOpen ] = useState(false);
    const [ stars, setStars ] = useState(0);
    const [ op, setOp ] = useState("Publicar")
    const [ comm, setComm ] = useState([]);
    const { setReload } = useContext(SystemContext);
    const descRef = useRef();

    // NEED FIX!!!!

    const handleOpen = () => {
        setOpen(true);
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            
            if (comm.status !== 401) {
                setStars(comm.score);
                descRef.current.value = comm.comment // add detection    
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
    const getComm = async () => {
        
        try {
            const res  = await getUserSpreadComm(); 
            setComm(res);
        } catch (err) {
            console.log(err);
        }
        return;
    };
    useEffect(() => {
        getComm();
        setReload(true);
    }, [open]);

    const handleSubmit = async () => {
        let desc = descRef?.current?.value;
        try {
            if (op === "Editar") {
                const res  = await editComm(comm._id, desc, stars);
            }else if (op === "Publicar") {
                const res  = await createComm(desc, stars);
            }else if (op === "Eliminar") {
                const res  = await deleteComm(comm._id);
            }

        } catch (e) {
            console.log(e);
        }
        setOpen(false);
    };

    const updateOp = async () => {
        await new Promise(r => setTimeout(r, 10));
        let desc = descRef?.current?.value;
        if (stars === 0 && desc === "" && comm.status !== 401) {
            setOp("Eliminar");
        } else if (comm!==[] && comm.status !== 401) {
            setOp("Editar");
        } else if(comm.status === 401){
            setOp("Publicar");
        }
    }

    useEffect(() => {
        updateOp();
    }, [open, stars]);

    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Valorar"} arrow>
                <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleOpen}><CommentIcon/></button>
            </Tooltip>
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
export default CommentDialog