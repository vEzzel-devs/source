import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material";
import { useState } from "react";

function Notification({type, title, content}) {
    const [ open, setOpen ] = useState(true);

    const [ vertical, horizontal ] = ["top", "center"];
    const TransitionDown = (props) => {
        return <Slide {...props} direction="down" />;
    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={5000} onClose={handleClose} TransitionComponent={TransitionDown}>
            <Alert variant="filled" onClose={handleClose} severity={type} sx={{ width: '50vw' }}>
                <AlertTitle>{title}</AlertTitle>
                {content}
            </Alert>
        </Snackbar>
    )
}

export default Notification