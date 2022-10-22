import { Autocomplete, DialogTitle, TextField } from "@mui/material";
import { Dialog, DialogContent, DialogActions } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SaveIcon from '@mui/icons-material/Save';

function SaveDialog() {
    const { theme } = useContext(ThemeContext);
    const [ open, setOpen ] = useState(false);

    const handleSubmit = () => {
        setOpen(false);
    };

    return (
        <>
            <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={() => setOpen(true)}><SaveIcon/></button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Guardar proyecto</DialogTitle>
                <DialogContent>
                    <input className={"p-2 mb-2 w-full outline-0 border-2 rounded-lg" + theme.mainBg + theme.mainText + theme.mainBorder} placeholder="Título del proyecto"/>
                    <textarea className={"p-2 mb-2 h-32 w-full outline-0 border-2 rounded-sm overflow-y-scroll resize-none" + theme.mainBg + theme.mainText + theme.mainBorder + theme.scrollbar} placeholder="Descripción del proyecto"/>
                    <Autocomplete
                        multiple
                        disableClearable
                        popupIcon={""}
                        id="tags-outlined"
                        options={["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9"]}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            label=""
                            placeholder="Tags"
                        />
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <button className={"md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={() => setOpen(false)}>Cancelar</button>
                    <button className={"md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit}>Guardar</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default SaveDialog