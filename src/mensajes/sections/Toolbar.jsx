import DashboardToolbar from '../../components/DashboardToolbar'
import { TextField, Tooltip, Zoom, Autocomplete } from "@mui/material";
import { ThemeContext } from '../../context/ThemeContext'
import { MsgContext } from '../context/MsgContext';
import { useContext,useEffect,useState } from 'react'
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import StartChatDialog from '../components/StartChatDialog';

function Toolbar() {
  const { theme } = useContext(ThemeContext);
  const { chats,setActive,changeActive } = useContext(MsgContext);
  const [option, setOption] = useState([]);

  useEffect(() => {
    let filter = chats.map((chat) => {
      if (chat.users[0][0] !== localStorage.getItem('userid')) {
        return { label: chat.users[0][1], id: chat.users[0][0] };
      }else{
        return { label: chat.users[1][1], id: chat.users[1][0] };}
    });
    setOption(filter);
  }, [chats]);

  const resetHandler = () => {
    location.reload();
  };
  const inputHandler = (event) => {
    let raw = event.target.value;
  };
  const handlerSearch = () => {
    let target = document.getElementById("search").value;
    target = option.filter((user) => user.label === target)[0];
    changeActive(target.id);
  };

  return (
    <DashboardToolbar helpText={<>
      <p>En esta vista puedes hacer cosas.</p>
      </>}>
      <div className="ml-4 flex flex-row space-x-2">
        <Tooltip TransitionComponent={Zoom} placement="bottom" enterDelay={500} title={"Refrescar"} arrow>
          <button className={"md:w-1/8 p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={resetHandler}><CachedIcon/></button>
        </Tooltip>
        <StartChatDialog/>
      </div>
      <div className="w-5/6 space-x-1 flex flex-row justify-center self-center">
        <div className="w-1/2 py-2 space-x-2 flex flex-row self-center content-center">
        <Autocomplete
            options={option}
            id="search"
            fullWidth
            placeholder="Buscar"
            onKeyPress = {(e) =>{if (e.code == "Enter"){handlerSearch()}}}
            renderInput={(params) => <TextField {...params}/>}
        />
          <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handlerSearch}><SearchIcon/></button>
        </div>
      </div>
    </DashboardToolbar>
  )
}

export default Toolbar
