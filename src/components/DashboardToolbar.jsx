import { ThemeContext } from "../context/ThemeContext";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { useContext } from "react";
import { Tooltip, Zoom } from "@mui/material";

function DashboardToolbar(props) {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
      <div className={"absolute top-0 left-0 pl-[80px] w-full" + theme.navbarBg + theme.mainText}>
        <div className="flex flex-row h-16 content-center items-center justify-between px-2 sm:px-6 lg:px-8">
          {props.children}
          <div className="flex content-center items-center justify-self-end px-4 space-x-2">
            <button onClick={toggleTheme} className={"rounded-full p-2" + theme.hoverNavbar}>
              {theme.buttonIcon}
            </button>
            <Tooltip TransitionComponent={Zoom} placement="bottom-start" title={props.helpText} arrow>
              <button className={"rounded-full p-2" + theme.hoverNavbar}>
                <QuestionMarkIcon className={theme.iconHover}/>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
  );
}

export default DashboardToolbar