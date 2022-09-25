import { useState, createContext } from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

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