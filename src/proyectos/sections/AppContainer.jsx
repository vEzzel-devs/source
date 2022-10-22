import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll" + theme.mainBg + theme.scrollbar}>
        <button className={"flex self-start items-center mr-2 p-2 rounded-lg border-2" + theme.primaryButton + theme.primaryText} onClick={()=>navigate("/edit")}><AddCircleOutlineIcon/> Nuevo proyecto</button>
      </div>
    </div>
  )
}

export default AppContainer