import { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SystemContext } from '../../context/SystemContext';
import { MsgContext } from '../context/MsgContext';
import { Tooltip, Zoom } from "@mui/material";
import UserCard from '../components/UserCard';
import SendIcon from '@mui/icons-material/Send';
import BlockIcon from '@mui/icons-material/Block';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { loading } = useContext(SystemContext);
  const { chats, active } = useContext(MsgContext);
  const [ fail, setFail ] = useState("");
  const entry = useRef();

  useEffect(() => {
    if (!loading) {
      setFail("No has iniciado conversaciones con otro usuario aún. Comienza a interactuar con los demás usando el botón de arriba!");
    } else {
      setFail("");
    }
  }, [loading]);
  
  const handleBlock = () => {
    // TO DO, also to refactor...
  };

  const sendHandler = () => {
    let content = entry.current.value;
    console.log(`Sent msg with content:${content}`);
    console.log(`To user:${active}`);
  };

  return (
    <div className={"w-full p-3 h-full flex flex-row items-start justify-start" + theme.primaryBg}>
      <div className={"w-3/4 h-full p-1 md:p-2 flex flex-col" + theme.mainBg}>
        <div className="w-full h-1/6 px-2 flex flex-row items-center justify-start">
          <h1 className={"text-4xl" + theme.mainText}>NombreUsuario</h1>
          <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={"Bloquear"} arrow>
            <button className={" h-1/4 mt-4 ml-2 cursor-pointer" + theme.primaryText} onClick={handleBlock}><BlockIcon/></button>
          </Tooltip>
        </div>
        <div className={"w-full h-3/4 m-auto flex flex-col justify-center border-2" + theme.mainBorder}>
          <div className={"text-center" + theme.mainText}>* mensajes intercambiados con usuario{active} *</div>
        </div>
        <div className="w-full p-2 mt-2 space-x-2 flex flex-row justify-start">
          <input ref={entry} className={"w-full h-full px-2 rounded-md border" + theme.mainText + theme.mainBg + theme.mainBorder} placeholder="Escribe un mensaje" onKeyPress = {(e) =>{if (e.code == "Enter") {sendHandler();}}}/>
          <button className={"p-3 rounded-lg" + theme.primaryText + theme.lightBg + theme.primaryButton} onClick={sendHandler}><SendIcon/></button>
        </div>
      </div>
      <div className={"w-1/4 h-full p-1 md:p-2 md:pl-0 pl-0 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-full flex flex-col overflow-y-scroll justify-start" + theme.scrollbar + theme.mainText}>
          {!loading && (chats && chats.length > 0) ? chats.map((chat, idx) => {
            return (<div key={`chat-with-user-${idx}`} className="w-full h-1/4 flex flex-none">
            <UserCard name={chat.username} last={chat.last} idx={idx}/>
          </div>);
          }) : fail}
        </div>
      </div>
    </div>
  )
}

export default AppContainer