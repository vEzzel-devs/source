import { useState, createContext } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const LIGHT = ({
    "folder" : "light",
    "buttonIcon" : <DarkModeIcon className="text-neutral-700 hover:text-black"/>,
    "navbarBg": " bg-neutral-100",
    "activeNavbar" : " bg-neutral-200 border-main-purple",
    "hoverNavbar" : " hover:bg-neutral-400 hover:text-black",
    "textNavbar" : " text-neutral-700",
    "borderNavbar" : " border-neutral-700",
    "mainBorder" : "border-black",
    "mainBg" : " bg-neutral-200",
    "lightText" : " text-neutral-600",
    "mainText" : " text-black",
    "primaryAccent" : " bg-main-purple",
    "secondaryAccent" : " bg-main-red",
    "primaryText" : " text-main-purple",
    "secondaryText" : " text-main-red",
});
const DARK = ({
    "folder" : "dark",
    "buttonIcon" : <LightModeIcon className="text-neutral-300 hover:text-white"/>,
    "navbarBg": " bg-neutral-900",
    "activeNavbar" : " bg-neutral-800 border-main-red",
    "hoverNavbar" : " hover:bg-neutral-600 hover:text-white",
    "textNavbar" : " text-neutral-300",
    "borderNavbar" : " border-neutral-300",
    "mainBorder" : "border-white",
    "mainBg" : " bg-neutral-800",
    "lightText" : " text-neutral-400",
    "mainText" : " text-white",
    "primaryAccent" : " bg-main-red",
    "secondaryAccent" : " bg-main-purple",
    "primaryText" : " text-main-red",
    "secondaryText" : " text-main-purple",
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

    return (
        <ThemeContext.Provider value={({theme, toggleTheme})}>
            {props.children}
        </ThemeContext.Provider>
    )
}