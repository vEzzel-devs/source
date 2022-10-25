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
    let localCells = JSON.parse(localStorage.getItem('sheetCells'));
    if (localCells) {
      localStorage.removeItem('sheetCells');
    }
    restartSheet();
    navigate("/edit");
  };

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes definir las funcionalidades y la vista de tu apliación mediante celdas tipadas. Entre los tipos disponibles:</p>
      <p>Vistas (/): Son celdas para definir los widgets que visualizará el usuario en la vista final de la aplicación.</p>
      <p>Tablas (#): Son celdas para guardar la información masiva, como conjuntos de datos o listas.</p>
      <p>Control ($): Son celdas para realizar operaciones de control con otras celdas, como bucles, condicionales o eventos.</p>
      <p>Algebra (=): Son celdas para calcular expresiones matemáticas, utilizando funciones y operaciones.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <button className={"md:w-36 flex self-start justify-center mr-2 p-2 rounded-lg border-2" + theme.primaryButton + theme.primaryText} onClick={handleNew}><DesignServicesIcon/> Nuevo</button>
        {isLatest ? <button className={"md:w-36 flex self-start justify-center mr-2 p-2 rounded-lg border-2" + theme.secondaryButton + theme.secondaryText} onClick={handleContinue}><EditIcon/> Continuar</button> : <></>}
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
