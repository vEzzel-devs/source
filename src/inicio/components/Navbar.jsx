import { useState, useEffect, useContext } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import MenuItems from "./MenuItems";

function Navbar({ current }) {
    const paths = ["#start", "#login", "#docs", "#about"];
    const [selection, setSelection] = useState("#start");
    const [collapse, setCollapse] = useState("hidden");
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [navstyle, setNavstyle] = useState([
        "px-2 py-1 border rounded-md text-sm font-medium" + theme.activeNavbar + theme.mainText,
        "px-3 py-2 rounded-md font-medium" + theme.textNavbar + theme.borderNavbar + theme.hoverNavbar,
        "px-3 py-2 rounded-md font-medium" + theme.textNavbar + theme.borderNavbar + theme.hoverNavbar,
        "px-3 py-2 rounded-md font-medium" + theme.textNavbar + theme.borderNavbar + theme.hoverNavbar,
    ]);
    const [active, setActive] = useState(false);
    const showMenu = () => {
      setActive(!active);
    };

    function toggleCollapse() {
      if (collapse === "") {
        setCollapse("hidden");
      } else {
        setCollapse("");
      }
    }

    useEffect(() => {
        setNavstyle(paths.map((element) => {
            if (selection === element) {
                return "px-3 py-2 border-b rounded-md text-sm font-medium" + theme.activeNavbar + theme.primaryText;
            } else {
                return "px-3 py-2 border-b rounded-md font-medium" + theme.textNavbar + theme.borderNavbar + theme.hoverNavbar;
            }
        }))
    }, [selection, theme]);

    useEffect(() => {
      setNavstyle(paths.map((_, idx) => {
          if (current === idx) {
              return "px-3 py-2 border-b rounded-md text-sm font-medium" + theme.activeNavbar + theme.primaryText;
          } else {
              return "px-3 py-2 border-b rounded-md font-medium" + theme.textNavbar + theme.borderNavbar + theme.hoverNavbar;
          }
      }))
  }, [current]);

    return (
    <nav className={"sticky top-0 z-50" + theme.navbarBg}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className={"inline-flex items-center justify-center rounded-md p-2 focus:outline-none" + theme.hoverNavbar} aria-controls="mobile-menu" aria-expanded="false" onClick={toggleCollapse}>
              <span className="sr-only">Open main menu</span>
              <MenuIcon className={theme.textNavbar} onClick={showMenu}/>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/"><div className="flex flex-shrink-0 items-center">
              <img className="hidden h-8 w-auto lg:hidden" src={theme.folder + "/banner.png"} alt="vEzzel banner"/>
              <img className="block h-8 w-auto lg:block" src={theme.folder + "/banner.png"} alt="vEzzel banner"/>
            </div></Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#start" className={navstyle[0] + " text-sm"} onClick={() => setSelection('#start')}>vEzzel?</a>
                <a href="#login" className={navstyle[1] + " text-sm"} onClick={() => setSelection('#login')}>Iniciar</a>
                <a href="#docs" className={navstyle[2] + " text-sm"} onClick={() => setSelection('#docs')}>Docs</a>
                <a href="#about" className={navstyle[3] + " text-sm"} onClick={() => setSelection('#about')}>Nosotros</a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button onClick={toggleTheme} className={"rounded-full p-2" + theme.hoverNavbar}>
              {theme.buttonIcon}
            </button>
          </div>
        </div>
      </div>
      
      <MenuItems showMenu={showMenu} active={active}/>
    </nav>
    )
}

export default Navbar