import React from "react";
import { useContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from "../../context/ThemeContext";




const ManuItems = ({showMenu, active}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <ul className={active ? 'flex-col flex items-center fixed inset-0 right-1/4 uppercase backdrop-blur-md gap-8 justify-center p-8 md:hidden' + theme.primaryText: 'hidden'}>
        <CloseIcon onClick={showMenu}/>
        <li>
          <a href="#start" className="mr-4 hover:underline md:mr-6">
          vEzzel?
          </a>
        </li>
        <li>
          <a href="#login" className="mr-4 hover:underline md:mr-6">
            Login
          </a>
        </li>
        <li>
          <a href="#about" className="mr-4 hover:underline md:mr-6">
            About
          </a>
        </li>
        <li>
          <a href="#docs" className="hover:underline">
            Documentacion
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ManuItems;
