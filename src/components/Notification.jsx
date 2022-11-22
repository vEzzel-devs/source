import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material";
import { useState } from "react";

function Notification({title, type, content, callback}) {
    const [ open, setOpen ] = useState(true);

    const [ vertical, horizontal ] = ["top", "center"];
    const TransitionDown = (props) => {
        return <Slide {...props} direction="down" />;
    }
    const handleClose = () => {
        setOpen(false);
        if (callback) {
            callback();
        }
    };
    return (
        <Snackbar anchorOrigin={{ vertical, horizontal }} open={open} autoHideDuration={4000} onClose={handleClose} TransitionComponent={TransitionDown}>
            <Alert variant="filled" onClose={handleClose} severity={type} sx={{ width: '50vw' }}>
                <AlertTitle>{title}</AlertTitle>
                {content}
            </Alert>
        </Snackbar>
    )
}

export default Notification