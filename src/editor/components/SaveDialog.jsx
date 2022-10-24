import { Autocomplete, DialogTitle, TextField, Tooltip } from "@mui/material";
import { Dialog, DialogContent, DialogActions, Zoom } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SaveIcon from '@mui/icons-material/Save';

function SaveDialog() {
    const { theme } = useContext(ThemeContext);
    const [ open, setOpen ] = useState(false);
    const [added, setAdded] = useState([]) 

    const handleSubmit = () => {
        // falta obtener la spreadsheet

        let titulo = document.getElementById("titulo").value;
        let descripcion = document.getElementById("desc").value;
        let tags = added
        
        console.log(titulo, descripcion, tags);
        setOpen(false);
    };

    const tagLimit = (to) => ((e, newValue) => {
        if (newValue.length > to) {
          newValue.pop(); 
        }
        setAdded([...newValue]);
    });

    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Guardar"} arrow>
                <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={() => setOpen(true)}><SaveIcon/></button>
            </Tooltip>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Guardar proyecto</DialogTitle>
                <DialogContent>
                    <input id='titulo'  className={"font-mono p-2 mb-2 w-full outline-0 border-2 rounded-sm" + theme.mainBg + theme.mainText + theme.mainBorder} placeholder="Título del proyecto" style={{fontFamily: "Cascadia Code"}}/>
                    <textarea id='desc' className={"font-mono p-2 mb-2 h-32 w-full outline-0 border-2 overflow-y-scroll resize-none" + theme.mainBg + theme.mainText + theme.mainBorder + theme.scrollbar} placeholder="Descripción del proyecto" style={{fontFamily: "Cascadia Code"}}/>
                    <Autocomplete
                        multiple
                        disableClearable
                        popupIcon={""}
                        onChange={tagLimit(5)}
                        id="tags-outlined"
                        options={["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9"]}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Tags"
                        />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(false)} style={{fontFamily: "Cascadia Code"}}>Cancelar</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>Guardar</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default SaveDialog