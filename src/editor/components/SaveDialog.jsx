import { Autocomplete, DialogTitle, TextField, Tooltip } from "@mui/material";
import { Dialog, DialogContent, DialogActions, Zoom } from "@mui/material";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SaveIcon from '@mui/icons-material/Save';
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { savespread, editspread } from "../utils/query";

function SaveDialog() {
    const { theme } = useContext(ThemeContext);
    const { sheetData, sheetDim, setSheetConfig, sheetConfig } = useContext(SpreadSheetContext);
    const [ open, setOpen ] = useState(false);
    const titleRef = useRef();
    const descRef = useRef();
    const [tags, setTags] = useState(sheetConfig.tags)

    const handleOpen = () => {
        setOpen(true);
        setTags(sheetConfig.tags);
        let wait = async () => {
            await new Promise(r => setTimeout(r, 10));
            titleRef.current.value = sheetConfig.title;
            descRef.current.value = sheetConfig.desc;
        }
        wait();
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const handleSubmit = async () => {
        let content = {
            shape: JSON.stringify(sheetDim),
            cont: JSON.stringify(sheetData)
        };
        let title = titleRef.current.value;
        let desc = descRef.current.value;
        if (sheetConfig.id) {
            let res = await editspread(sheetConfig.id, content, title, desc, tags);
        } else {
            let res = await savespread(content, title, desc, tags);
        }
        setSheetConfig({title, desc, tags});
        setOpen(false);
    };

    const tagLimit = (to) => ((e, newValue) => {
        if (newValue.length > to) {
          newValue.pop(); 
        }
        setTags([...newValue]);
    });

    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Guardar"} arrow>
                <button className={"md:w-1/8 p-2 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleOpen}><SaveIcon/></button>
            </Tooltip>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Guardar proyecto</DialogTitle>
                <DialogContent>
                    <input id='titulo' ref={titleRef} className={"font-mono p-2 mb-2 w-full outline-0 border-2 rounded-sm" + theme.mainBg + theme.mainText + theme.mainBorder} placeholder="Título del proyecto" style={{fontFamily: "Cascadia Code"}}/>
                    <textarea id='desc' ref={descRef} className={"font-mono p-2 mb-2 h-32 w-full outline-0 border-2 overflow-y-scroll resize-none" + theme.mainBg + theme.mainText + theme.mainBorder + theme.scrollbar} placeholder="Descripción del proyecto" style={{fontFamily: "Cascadia Code"}}/>
                    <Autocomplete
                        multiple
                        disableClearable
                        popupIcon={""}
                        value={tags}
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
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.secondaryButton} onClick={handleCancel} style={{fontFamily: "Cascadia Code"}}>Cancelar</button>
                    <button className={"font-mono md:w-1/4 mr-2 p-2 rounded-lg border-2" + theme.mainText + theme.mainBg + theme.primaryButton} type="submit" onClick={handleSubmit} style={{fontFamily: "Cascadia Code"}}>{sheetConfig.id != "" ? "Guardar" : "Crear"}</button>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default SaveDialog