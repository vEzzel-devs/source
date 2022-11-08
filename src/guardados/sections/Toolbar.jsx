import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { latestSpread } from '../utils/query';
import { SpreadSheetContext } from '../../context/SpreadSheetContext';
import { Tooltip, Zoom, TextField } from '@mui/material';
import { UserDataContext } from '../../context/UserDataContext';
import { FilterContext } from '../context/FilterContext';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { setSheetDim, setSheetData, setSheetConfig, restartSheet } = useContext(SpreadSheetContext);
  const { isLatest, setIsLatest } = useContext(UserDataContext);
  const { setDetect } = useContext(FilterContext);
  const [ input, setInput ] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const callLatest = async () => {
      const value = await latestSpread()
      if (value) {
        setIsLatest(true);
      } 
    };
    try {
      callLatest();
    } catch(e) {
      console.log(e);
    }
  }, []);

  const handleContinue = () => {
    let localDim = JSON.parse(localStorage.getItem('sheetDim'));
    if (localDim) {
      setSheetDim(localDim);
    }
    let localData = JSON.parse(localStorage.getItem('sheetData'));
    if (localData) {
      setSheetData(localData);
    }
    let localConfig = JSON.parse(localStorage.getItem('sheetConfig'));
    if (localConfig) {
      setSheetConfig(localConfig);
    }
    navigate("/edit");
  };

  const handleNew = () => {
    restartSheet();
    navigate("/edit");
  };

  const resetHandler = () => {
    sessionStorage.clear();
    location.reload();
  }

  const inputHandler = (event) => {
    let raw = event.target.value;
    setInput(raw.replaceAll(" ", "_").replace(/\W/g, '').toLowerCase())
  };

  const handlerSearch = () => {
    let arr = input.split("_");
    if (arr.length === 0) {
      arr = [""];
    }
    setDetect(arr);
  };

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista se muestran todos los proyectos asociados a su cuenta, ya sea debido a que sean sus creaciones propias como otros proyectos a los que les hizo alguna modificación. Además, si quiere realizar un nuevo proyecto, o continuar con el último que edito, los botones de la barra de herramientas le permitirán hacer estas acciones. También en esta vista puede eliminar los proyectos que no vaya a necesitar más. Pero confirme a su propio riesgo, ya que una vez eliminado, su proyecto no podrá ser recuperado.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Refrescar"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={resetHandler}><CachedIcon/></button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Nuevo"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleNew}><DesignServicesIcon/></button>
        </Tooltip>
        {isLatest && 
          <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Continuar"} arrow>
            <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleContinue}><EditIcon/></button>
          </Tooltip>
        }
      </div>
      <div className="w-5/6 space-x-1 flex flex-row justify-center self-center">
        <div className="w-1/2 py-2 space-x-2 flex flex-row self-center content-center">
          <TextField
            fullWidth
            placeholder="Buscar"
            id="input-search"
            onChange={inputHandler}
            onKeyPress = {(e) =>{if (e.code == "Enter"){handlerSearch()}}}
            />
            <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handlerSearch}><SearchIcon/></button>
        </div>
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
