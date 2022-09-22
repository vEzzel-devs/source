import { ThemeContext } from "../context/ThemeContext";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useContext } from "react";

function DashboardToolbar(props) {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
      <div className={"flex flex-row w-full px-2 sm:px-6 lg:px-8" + theme.navbarBg}>
        <div className="w-full flex h-16 items-center justify-between">
          {props.children}
        </div>
        <div className="flex items-center justify-self-end px-4">
          <button onClick={toggleTheme} className={"rounded-full p-2" + theme.hoverNavbar}>
            {theme.buttonIcon}
          </button>
          <button onClick={props.someFunction} className={"rounded-full p-2" + theme.hoverNavbar}>
            <QuestionMarkIcon/>
          </button>
        </div>
      </div>
  );
}

export default DashboardToolbar