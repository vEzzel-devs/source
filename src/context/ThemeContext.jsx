import { useState, createContext, useEffect } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const LIGHT = ({
    "folder" : "light",
    "scrollbar": " light-scrollbar",
    "buttonIcon" : <DarkModeIcon className="text-neutral-700 hover:text-black"/>,
    "iconHover": " text-neutral-700 hover:text-black",
    "sidebarBg": " bg-neutral-100",
    "hoverSidebar" : " hover:bg-neutral-400 hover:text-black",
    "textSidebar" : " text-neutral-700",
    "navbarBg": " bg-neutral-50",
    "activeNavbar" : " bg-neutral-200 border-main-purple",
    "hoverNavbar" : " hover:bg-neutral-400 hover:text-black",
    "textNavbar" : " text-neutral-700",
    "borderNavbar" : " border-neutral-700",
    "mainBorder" : " border-black",
    "mainBg" : " bg-neutral-200",
    "highBg" : " bg-neutral-400",
    "lightText" : " text-neutral-600",
    "mainText" : " text-black",
    "primaryAccent" : " bg-main-purple",
    "secondaryAccent" : " bg-main-red",
    "primaryText" : " text-main-purple",
    "secondaryText" : " text-main-red",
    "primaryButton" : " border-main-purple hover:bg-main-purple hover:text-white",
    "secondaryButton" : " border-main-red hover:bg-main-red hover:text-white",
    "primaryBg" : " bg-cover bg-light-pattern",
    "secondaryBg" : " bg-cover bg-light-alt-pattern",
    "cells" : {
        "base": " bg-neutral-200",
        "view": " bg-yellow-100",
        "math": " bg-green-200",
        "data": " bg-blue-200",
        "ctrl": " bg-purple-200",
    }
});
const DARK = ({
    "folder" : "dark",
    "scrollbar": " dark-scrollbar",
    "buttonIcon": <LightModeIcon className="text-neutral-300 hover:text-white"/>,
    "iconHover": " text-neutral-300 hover:text-white",
    "sidebarBg": " bg-neutral-850",
    "hoverSidebar" : " hover:bg-neutral-500 hover:text-white",
    "textSidebar" : " text-neutral-300",
    "navbarBg": " bg-neutral-900",
    "activeNavbar" : " bg-neutral-800 border-main-red",
    "hoverNavbar" : " hover:bg-neutral-600 hover:text-white",
    "textNavbar" : " text-neutral-300",
    "borderNavbar" : " border-neutral-300",
    "mainBorder" : " border-white",
    "mainBg" : " bg-neutral-800",
    "highBg" : " bg-neutral-600",
    "lightText" : " text-neutral-400",
    "mainText" : " text-white",
    "primaryAccent" : " bg-main-red",
    "secondaryAccent" : " bg-main-purple",
    "primaryText" : " text-main-red",
    "secondaryText" : " text-main-purple",
    "primaryButton" : " border-main-red hover:bg-main-red hover:text-black",
    "secondaryButton" : " border-main-purple hover:bg-main-purple hover:text-black",
    "primaryBg" : " bg-cover bg-dark-pattern",
    "secondaryBg" : " bg-cover bg-dark-alt-pattern",
    "cells" : {
        "base": " bg-neutral-800",
        "view": " bg-yellow-600",
        "math": " bg-green-800",
        "data": " bg-blue-900",
        "ctrl": " bg-purple-900",
    }
});

const themeLight = createTheme({
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
                        color: "#000000"
                    },
                    "& label.Mui-focused": {
                        color: "#541690"
                    },
                    "& .MuiInput-underline:before": {
                        borderBottomColor: "#525252"
                    },
                    "& .MuiInput-underline:not(.Mui-disabled):hover::before": {
                        borderBottomColor: "#000000"
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "#541690"
                    },
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#000000",
                            borderWidth: "2px"
                        },
                        "&:hover fieldset": {
                            borderColor: "#000000",
                            borderWidth: "2px"
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#000000",
                        }
                    },
                    "& .MuiChip-root": {
                        backgroundColor: "#541690",
                        color: "#FFFFFF"
                    }
                }
            }
        }
    }
});
  
const themeDark = createTheme({
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
                        color: "#FFFFFF"
                    },
                    "& label.Mui-focused": {
                        color: "#FF4949"
                    },
                    "& .MuiInput-underline:before": {
                        borderBottomColor: "#A3A3A3"
                    },
                    "& .MuiInput-underline:not(.Mui-disabled):hover::before": {
                        borderBottomColor: "#FFFFFF"
                    },
                    "& .MuiInput-underline:after": {
                        borderBottomColor: "#FF4949"
                    },
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "#FFFFFF",
                            borderWidth: "2px"
                        },
                        "&:hover fieldset": {
                            borderColor: "#FFFFFF",
                            borderWidth: "2px"
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#FFFFFF",
                        }
                    },
                    "& .MuiChip-root": {
                        backgroundColor: "#FF4949",
                        color: "#000000"
                    }
                }
            }
        }
    }
});

export const ThemeContext = createContext();
export function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(LIGHT);
    function toggleTheme() {
        if (theme.mainBg === " bg-neutral-800") {
            setTheme(LIGHT);
        } else {
            setTheme(DARK);
        }
    }

    useEffect(() => {
        let localTheme = JSON.parse(localStorage.getItem('theme'));
        if (localTheme?.mainBg === " bg-neutral-800") {
            toggleTheme();
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);

    return (
        <ThemeProvider theme={theme.mainBg === " bg-neutral-800" ? themeDark : themeLight}>
            <ThemeContext.Provider value={({theme, toggleTheme})}>
                {props.children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}