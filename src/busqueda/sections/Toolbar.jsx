import SearchIcon from '@mui/icons-material/Search';
import DashboardToolbar from '../../components/DashboardToolbar'
import { ThemeContext } from '../../context/ThemeContext'
import { SearchContext } from "../context/SearchContext"
import { SystemContext } from '../../context/SystemContext';
import { useContext, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material';
import {search} from "../utils/query";

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { allTags } = useContext(SystemContext);
  const { setResults } = useContext(SearchContext);
  const [added, setAdded] = useState([])
  const tagLimit = (to) => ((e, newValue) => {
    if (newValue.length > to) {
      newValue.pop(); 
    }
    setAdded([...newValue]);
  });

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes definir las funcionalidades y la vista de tu aplicación mediante celdas tipadas. Entre los tipos disponibles:</p>
      <p>Vistas (/): Son celdas para definir los widgets que visualizará el usuario en la vista final de la aplicación.</p>
      <p>Tablas (#): Son celdas para guardar la información masiva, como conjuntos de datos o listas.</p>
      <p>Control ($): Son celdas para realizar operaciones de control con otras celdas, como bucles, condicionales o eventos.</p>
      <p>Algebra (=): Son celdas para calcular expresiones matemáticas, utilizando funciones y operaciones.</p>
      </>}>
      <div className="w-5/6 space-x-1 flex flex-row justify-center self-center">
        <div className="w-1/3 py-2 flex flex-row content-center self-center">
          <Autocomplete
            multiple
            fullWidth
            disableClearable
            popupIcon={""}
            onChange={tagLimit(3)}
            id="tags-outlined"
            options={allTags}
            renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              placeholder="Tags"
              
            />
            )}
          />
        </div>
        <div className="w-1/2 py-2 space-x-2 flex flex-row self-center content-center">
          <TextField
            fullWidth
            placeholder="Buscar"
            id="input-search"
            onChange={(e) => setInput(e.target.value)}
            onKeyPress = {(e) =>{if (e.code == "Enter"){handleSearch()}}}
          />
        </div>
        <TextField
          style={{ width: 350 }}
          placeholder="Buscar"
          id="input-search"
        />
        <button className={"p-4 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={search}><SearchIcon/></button>
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
