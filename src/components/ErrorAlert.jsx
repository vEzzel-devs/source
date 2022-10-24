import { Alert, AlertTitle, Slide, Snackbar } from "@mui/material";
import { useState } from "react";

function ErrorAlert({type, content}) {
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
            <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '50vw' }}>
                <AlertTitle>{type}</AlertTitle>
                {content}
            </Alert>
        </Snackbar>
    )
}

export default ErrorAlert