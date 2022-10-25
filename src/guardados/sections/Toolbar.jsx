import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { latestSpread } from '../../editor/utils/query';
import { SpreadSheetContext } from '../../context/SpreadSheetContext';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { setSheetDim, setSheetData, setSheetConfig, restartSheet } = useContext(SpreadSheetContext);
  const [isLatest, setIsLatest] = useState(false);
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

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista se muestran todos los proyectos asociados a su cuenta, ya sea debido a que sean sus creaciones propias como otros proyectos a los que les hizo alguna modificación. Además, si quiere realizar un nuevo proyecto, o continuar con el último que edito, los botones de la barra de herramientas le permitirán hacer estas acciones. También en esta vista puede eliminar los proyectos que no vaya a necesitar más. Pero confirme a su propio riesgo, ya que una vez eliminado, su proyecto no podrá ser recuperado.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <button className={"md:w-36 flex self-start justify-center mr-2 p-2 rounded-lg border-2" + theme.primaryButton + theme.primaryText} onClick={handleNew}><DesignServicesIcon/> Nuevo</button>
        {isLatest ? <button className={"md:w-36 flex self-start justify-center mr-2 p-2 rounded-lg border-2" + theme.secondaryButton + theme.secondaryText} onClick={handleContinue}><EditIcon/> Continuar</button> : <></>}
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
