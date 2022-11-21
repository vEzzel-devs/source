import { useContext, useEffect, useState, useRef } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { SystemContext } from '../../context/SystemContext';
import { MsgContext } from '../context/MsgContext';
import UserCard from '../components/UserCard';
import SendIcon from '@mui/icons-material/Send';
import Message from '../components/Message';
import BlockDialog from '../components/BlockDialog';

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

  const sendHandler = () => {
    let content = entry.current.value;
    console.log(`Sent msg with content:${content}`);
    console.log(`To user:${active}`);
  };

  return (
    <div className={"w-full p-3 h-full flex flex-row items-start justify-start" + theme.primaryBg}>
      <div className={"w-3/4 h-full p-1 md:p-2 flex flex-col" + theme.mainBg}>
        <div className="w-full h-1/6 px-5 flex flex-row items-center justify-start">
          <h1 className={"text-4xl" + theme.mainText}>NombreUsuario</h1>
          <BlockDialog/>
        </div>
        <div className="w-full h-3/4 px-2">
          <div className={"w-full h-full p-2 m-auto flex flex-col justify-end border" + theme.mainBorder}>
            <div className={"flex flex-col px-3 space-y-2 overflow-y-scroll" + theme.mainText + theme.scrollbar}>
              {/* Aqui hacen falta mas detalles sobre la implementacion */}
              <Message side={"left"} content={"Sample text for a hello"}/>
              <Message side={"right"} content={"Your sample response"} time={"17:12"}/>
            </div>
          </div>
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