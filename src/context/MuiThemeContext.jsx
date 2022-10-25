import { createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const themeLight = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: `"Cascadia Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                arrow: {
                    "&:before": {
                        border: "#F5F5F5DD"
                    },
                    color: "#F5F5F5DD"
                },
                tooltip: {
                    backgroundColor: "#F5F5F5DD",
                    color: "#000000"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    backgroundColor: "#E5E5E5",
                    color: "#000000"
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    backgroundColor: "#E5E5E5",
                    color: "#000000"
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    backgroundColor: "#E5E5E5",
                    color: "#000000"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& label": {
                        color: "#525252"
                    },
                    "& .MuiInputBase-input": {
                        padding: "3px",
                        color: "#000000"
                    },
                    "& label.Mui-focused": {
                        color: "#541690"
                    },
                    "& .MuiInput-underline:before": {
                        borderBottomColor: "#404040"
                    },
                    "& .MuiInput-underline:not(.Mui-disabled):hover::before": {
                        borderBottomColor: "#000000"
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "#541690"
                    },
                    '& .MuiOutlinedInput-root': {
                        maxHeight: "3rem",
                        height: "3rem",
                        borderWidth: "2px",
                        borderColor: "#404040",
                        '& fieldset': {
                            borderWidth: "0px"
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: "0px"
                        }
                    }
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    justifyContent: "center"
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    paddingRight: "3px",
                    "& .MuiOutlinedInput-root": {
                        padding: "3px",
                        flexGrow: "grow",
                        flexWrap: "nowrap !important",
                        overflowX: "scroll !important",
                        overflowY: "hidden !important",
                        borderWidth: "2px",
                        "::-webkit-scrollbar": {
                            height: "1px"
                        },
                        "::-webkit-scrollbar-track": {
                            backgroundColor: "#E5E5E5"
                        },
                        "::-webkit-scrollbar-thumb": {
                            borderRadius: "100vh",
                            border: "1px solid #A3A3A3"
                        },
                        "& fieldset": {
                            display: "hidden !important"
                        }
                    },
                    "& .MuiChip-root": {
                        backgroundColor: "#541690",
                        color: "#FFFFFF"
                    }
                },
                listbox: {
                    "::-webkit-scrollbar": {
                        width: "5px"
                    },
                    "::-webkit-scrollbar-track": {
                        backgroundColor: "#E5E5E5"
                    },
                    "::-webkit-scrollbar-thumb": {
                        borderRadius: "100vh",
                        border: "3px solid #A3A3A3"
                    },
                }
            }
        }
    }
});

const themeDark = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: `"Cascadia Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                arrow: {
                    "&:before": {
                        border: "#1E1E1EDD"
                    },
                    color: "#1E1E1EDD"
                },
                tooltip: {
                    backgroundColor: "#1E1E1EDD",
                    color: "#FFFFFF"
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    backgroundColor: "#262626",
                    color: "#FFFFFF"
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    backgroundColor: "#262626",
                    color: "#FFFFFF"
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    backgroundColor: "#262626",
                    color: "#FFFFFF"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& label": {
                        color: "#A3A3A3"
                    },
                    "& .MuiInputBase-input": {
                        padding: "3px",
                        color: "#FFFFFF"
                    },
                    "& label.Mui-focused": {
                        color: "#FF4949"
                    },
                    "& .MuiInput-underline:before": {
                        borderBottomColor: "#D4D4D4"
                    },
                    "& .MuiInput-underline:not(.Mui-disabled):hover::before": {
                        borderBottomColor: "#FFFFFF"
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "#FF4949"
                    },
                    '& .MuiOutlinedInput-root': {
                        maxHeight: "3rem",
                        height: "3rem",
                        borderWidth: "2px",
                        borderColor: "#D4D4D4",
                        '& fieldset': {
                            borderWidth: "0px"
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: "0px"
                        }
                    }
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    justifyContent: "center"
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    paddingRight: "3px",
                    "& .MuiOutlinedInput-root": {
                        padding: "3px",
                        flexGrow: "grow",
                        flexWrap: "nowrap !important",
                        overflowX: "scroll !important",
                        overflowY: "hidden !important",
                        borderWidth: "2px",
                        "::-webkit-scrollbar": {
                            height: "1px"
                        },
                        "::-webkit-scrollbar-track": {
                            backgroundColor: "#262626"
                        },
                        "::-webkit-scrollbar-thumb": {
                            borderRadius: "100vh",
                            border: "1px solid #404040"
                        },
                        "& fieldset": {
                            display: "hidden !important"
                        },
                    },
                    "& .MuiChip-root": {
                        backgroundColor: "#FF4949",
                        color: "#000000"
                    }
                },
                listbox: {
                    "::-webkit-scrollbar": {
                        width: "5px"
                    },
                    "::-webkit-scrollbar-track": {
                        backgroundColor: "#262626"
                    },
                    "::-webkit-scrollbar-thumb": {
                        borderRadius: "100vh",
                        border: "3px solid #404040"
                    },
                }
            }
        }
    }
});

export const MuiThemeContext = createContext();
export function MuiThemeContextProvider(props) {
    let muiDark, setMuiDark;
    let localTheme = JSON.parse(localStorage.getItem('theme'));
    if (localTheme?.mainBg === " bg-neutral-800") {
        [ muiDark, setMuiDark ] = useState(true);
    } else {
        [ muiDark, setMuiDark ] = useState(false);
    }
    const toggleMui = () => { setMuiDark(!muiDark); };
    return (
        <ThemeProvider theme={muiDark ? themeDark : themeLight}>
            <MuiThemeContext.Provider value={({ toggleMui })}>
                { props.children }
            </MuiThemeContext.Provider>
        </ThemeProvider>
    )
}