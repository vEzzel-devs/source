import { DialogContent, DialogTitle, Tooltip } from "@mui/material";
import { Dialog, DialogActions, Zoom } from "@mui/material";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import CommentIcon from '@mui/icons-material/Comment';
import ValueStars from "./ValueStars";

function CommentDialog() {
    const { theme } = useContext(ThemeContext);
    const [ open, setOpen ] = useState(false);
    const [ stars, setStars ] = useState(0);
    const [ op, setOp ] = useState("Publicar")
    const descRef = useRef();

    const handleOpen = () => {
        setOpen(true);
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            descRef.current.value = ""; // add detection
        }
        wait();
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const handleSubmit = async () => {
        let desc = descRef.current.value;
        // query
        setOpen(false);
    };

    const tagLimit = (to) => ((e, newValue) => {
        if (newValue.length > to) {
          newValue.pop(); 
        }
        setTags([...newValue]);
    });

    const updateOp = async () => {
        await new Promise(r => setTimeout(r, 10));
        let desc = descRef?.current?.value;
        if (true && stars === 0 && desc === "") {
            setOp("Eliminar");
        } else if (true) {
            setOp("Editar");
        } else {
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