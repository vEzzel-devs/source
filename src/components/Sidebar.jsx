import Vezzel from "./Vezzel";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import { ThemeContext } from "../context/ThemeContext";
import { SystemContext } from "../context/SystemContext";
import { Tooltip, Zoom } from "@mui/material";

function ConditionalTooltip({display, children, ...props}) {
  return display ? <Tooltip {...props}>{children}</Tooltip> : <>{children}</>;
}

function Sidebar() {
  const { theme } = useContext(ThemeContext)
  const { logout } = useContext(SystemContext);
  const [ isOpen, setIsOpen ] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const Menus = [
    { title: "Búsqueda",path:"/search", icon:<SearchIcon/>, gap: true  },
    { title: "Perfil",path:"/profile", icon:<PersonIcon/> },
    { title: "Editor",path:"/edit", icon:<EditIcon/>},
    { title: "Guardados",path:"/saved", icon:<FolderIcon/>},
    /*
    { title: "mensajeria ",path:"/", icon:<ChatIcon/>, gap: true  },
    */
    { title: "Cerrar sesión",path:"/", icon:<PowerSettingsNewIcon/>, position:-1 },
  ];

  return (
    <div className="h-screen z-10">
      <div className={`${isOpen ? "w-[200px]" : "w-[80px]"} duration-[100ms] h-screen p-5 relative` + theme.sidebarBg}>
        <div className="px-4 cursor-pointer" onClick={toggleOpen}>
          <ArrowForwardIcon 
          className={`absolute z-10 cursor-pointer rounded-full text-lg -right-3 top-9 w-7 border-2 ${isOpen && "rotate-180"}` + theme.mainBorder + theme.mainBg + theme.mainText}/>
        </div>

        <Link to="/">
          <div className={`flex justify-center items-center cursor-pointer ${isOpen ? "text-[40px] duration-[300ms]": "text-[15px] duration-[250ms]"} `}>
            <Vezzel/>
          </div>
        </Link>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.path} key={`sb-link-${index}`}>
              <ConditionalTooltip display={!isOpen} TransitionComponent={Zoom} placement="right" enterDelay={120} title={Menu.title} arrow>
                <li
                  onClick={Menu.position === -1 ? logout : ()=>{}}
                  className={`flex flex-row rounded-md py-2 cursor-pointer text-md items-center ${Menu.gap ? "mt-[60px]" : "mt-[1px]"} ${Menu.position === -1 ? "absolute bottom-[5%] px-2 space-x-1" : "space-x-2 px-4"}` + theme.hoverSidebar + theme.textSidebar + (isOpen ? " justify-start" : " justify-center")}
                >
                  <span>
                    {Menu.icon}
                  </span>
                  <span className={`${!isOpen && "hidden"} origin-left self-stretch`}>
                    {Menu.title}
                  </span>
                </li>
              </ConditionalTooltip>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;