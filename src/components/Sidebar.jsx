import Vezzel from "./Vezzel";
import { useState} from "react";
import{Link} from "react-router-dom";
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

function Sidebar() {
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
    { title: "LogOut",path:"/", icon:<PowerSettingsNewIcon/>, position:-1 },
  ];
  return (
    <div className="h-screen">
      <div className={`${isOpen ? "w-[200px]" : "w-[80px]"} duration-[250ms] h-screen p-5 bg-gray-900 relative`}>
        <div className="px-4 cursor-pointer" onClick={toggleOpen}>
          <AppsIcon 
          className={`absolute z-10 cursor-pointer rounded-full text-lg -right-3 top-9 w-7 border-2 bg-white border-gray-900 ${isOpen && "rotate-45"}`}/>
        </div>

        <div className={`flex gap-x-4 items-center cursor-pointer ${isOpen ? "text-[40px] duration-[300ms]": "text-[15px] duration-[250ms]"} `}>
          <Vezzel/>
        </div>

        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white  text-gray-300 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-[60px]" : "mt-[1px]"} ${index === 0 && "bg-light-white"} ${Menu.position == -1 ? "absolute bottom-[5%]" : ""} `}
            >
              <Link to={Menu.path}>
                <span>
                  {Menu.icon}
                </span>
                <span className={`${!isOpen && "hidden"} origin-left`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
