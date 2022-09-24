import Vezzel from "./Vezzel";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SearchIcon from '@mui/icons-material/Search';
import ConstructionIcon from '@mui/icons-material/Construction';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';
import EditIcon from '@mui/icons-material/Edit';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ThemeContext } from "../context/ThemeContext";

function Sidebar() {
  const { theme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const Menus = [
    /*
    { title: "Busqueda",path:"/", icon:<SearchIcon/> },
    { title: "Perfil",path:"/", icon:<AccountCircleIcon/> },
    */
    { title: "Editor",path:"/Editor", icon:<EditIcon/>, gap: true },
    { title: "Ejecutar",path:"/Ejecutar", icon:<PlayArrowIcon/>},
    /*
    { title: "mensajeria ",path:"/", icon:<ChatIcon/>, gap: true  },
    { title: "favoritos",path:"/", icon:<FavoriteIcon/> },
    */
    { title: "Cerrar sesión",path:"/", icon:<PowerSettingsNewIcon/>, position:-1 },
  ];
  return (
    <div className="h-screen z-10">
      <div className={`${isOpen ? "w-[200px]" : "w-[80px]"} duration-[100ms] h-screen p-5 relative` + theme.sidebarBg}>
        <div className="px-4 cursor-pointer" onClick={toggleOpen}>
          <AppsIcon 
          className={`absolute z-10 cursor-pointer rounded-full text-lg -right-3 top-9 w-7 border-2 ${isOpen && "rotate-45"}` + theme.mainBorder + theme.mainBg + theme.mainText}/>
        </div>

        <Link to="/">
          <div className={`flex justify-center items-center cursor-pointer ${isOpen ? "text-[40px] duration-[300ms]": "text-[15px] duration-[250ms]"} `}>
            <Vezzel/>
          </div>
        </Link>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={Menu.path}>
              <li
                key={index}
                className={`flex flex-row justify-center rounded-md py-2 cursor-pointer text-md items-center
                ${Menu.gap ? "mt-[60px]" : "mt-[1px]"} ${Menu.position == -1 ? "absolute bottom-[5%] px-2 space-x-1" : "space-x-2 px-4"}` + theme.hoverSidebar + theme.textSidebar}
              >
                <span>
                  {Menu.icon}
                </span>
                <span className={`${!isOpen && "hidden"} origin-left self-stretch`}>
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;