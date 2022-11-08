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
  const { allTags, setLoading } = useContext(SystemContext);
  const { setResults, setDetect, setSearching } = useContext(SearchContext);
  const [added, setAdded] = useState([])
  const [input, setInput] = useState("")

  const tagLimit = (to) => ((e, newValue) => {
    if (newValue.length > to) {
      newValue.pop(); 
    }
    setAdded([...newValue]);
  });

  const handlerSearch = async () => {
    setLoading(true);
    setSearching(true);
    let arr = input.split("_");
    if (arr.length === 0) {
      arr = [""];
    }
    setDetect(arr);
    let searchSpread = await search(added, "");
    try {
      if (searchSpread) {
        setResults(searchSpread);
      }
    } catch (e) {
      console.log(e);
    }
    setSearching(false);
  };

  const inputHandler = (event) => {
    let raw = event.target.value;
    setInput(raw.replaceAll(" ", "_").replace(/\W/g, '').toLowerCase());
  };

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista se puede buscar soluciones digitales que estén disponibles para su libre uso y personalización. Para realizar la búsqueda se puede filtrar por medio de diferentes etiquetas predefinidas o bien texto personalizado, se obtendrá un resultado más preciso al seleccionar menos etiquetas y al especificar más en el texto de búsqueda. Hay un límite de 3 etiquetas por búsqueda.</p>
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
