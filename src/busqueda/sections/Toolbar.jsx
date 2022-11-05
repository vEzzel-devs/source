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
  const [input, setInput] = useState("")

  const tagLimit = (to) => ((e, newValue) => {
    if (newValue.length > to) {
      newValue.pop(); 
    }
    setAdded([...newValue]);
  });

  const handleSearch = async () => {
    let searchSpread = await search(added, input);
    try {
      if (searchSpread) {
        setResults(searchSpread);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista se puede buscar soluciones digitales que estén disponibles para su libre uso y/o personalización. Para realizar la búsqueda se puede filtrar por medio de diferentes etiquetas predefinidas y el texto de la entrada de la derecha de la barra de herramientas, se obtendrá un resultado más preciso al seleccionar menos etiquetas y al especificar más en el texto de búsqueda. Igualmente se recomienda buscar con menos palabras en el buscador para obtener más resultados. Hay un límite de 3 etiquetas por búsqueda.</p>
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
          <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handleSearch}><SearchIcon/></button>
        </div>
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
