import { Autocomplete, DialogTitle, TextField, Tooltip } from "@mui/material";
import { Dialog, DialogContent, DialogActions, Zoom } from "@mui/material";
import { useContext, useState, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { savespread, editspread } from "../utils/query";
import { SystemContext } from "../../context/SystemContext";
import { UserDataContext } from "../../context/UserDataContext";
import SaveIcon from '@mui/icons-material/Save';

function SaveDialog() {
    const { theme } = useContext(ThemeContext);
    const { allTags, setLoading } = useContext(SystemContext);
    const { addCard, updateCard } = useContext(UserDataContext);
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
        let res, newCard = false;
        let title = titleRef.current.value;
        let desc = descRef.current.value;
        setLoading(true);
        if (sheetConfig.id != "") {
            res = await editspread(sheetConfig.id, content, title, desc, tags);
        } else {
            res = await savespread(content, title, desc, tags);
            newCard = true;
        }
        setLoading(false);
        setOpen(false);
        let localConfig = JSON.parse(localStorage.getItem('sheetConfig'));
        if (localConfig) {
            setSheetConfig(localConfig);
        }
        if (newCard) {
            addCard({
                "_id": res.id,
                description: desc,
                name: title,
                content: JSON.stringify(content),
                tags,
            });
        } else {
            updateCard({
                "_id": sheetConfig.id,
                description: desc,
                name: title,
                content: JSON.stringify(content),
                tags,
            })
        }
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
                <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleOpen}><SaveIcon/></button>
            </Tooltip>
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>Guardar proyecto</DialogTitle>
                <DialogContent>
                    <input id='titulo' ref={titleRef} className={"font-mono p-2 mb-2 w-full outline-0 border-2 rounded-sm" + theme.mainBg + theme.mainText + theme.borderNavbar} placeholder="Título del proyecto" style={{fontFamily: "Cascadia Code"}}/>
                    <textarea id='desc' ref={descRef} className={"font-mono p-2 mb-2 h-32 w-full outline-0 border-2 overflow-y-scroll resize-none" + theme.mainBg + theme.mainText + theme.borderNavbar + theme.scrollbar} placeholder="Descripción del proyecto" style={{fontFamily: "Cascadia Code"}}/>
                    <Autocomplete
                        multiple
                        disableClearable
                        popupIcon={""}
                        value={tags}
                        onChange={tagLimit(5)}
                        id="tags-outlined"
                        options={allTags}
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