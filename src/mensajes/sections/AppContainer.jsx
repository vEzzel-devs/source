import { ThemeContext } from '../../context/ThemeContext';
import { SystemContext } from '../../context/SystemContext';
import { MsgContext } from '../context/MsgContext';
import SendIcon from '@mui/icons-material/Send';
import { useContext, useEffect, useState } from 'react';
import { sendMsg } from "../utils/query";
function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { loading, setLoading } = useContext(SystemContext);
  const { chats, active, setActive } = useContext(MsgContext);
  const [ fail, setFail ] = useState("");

  useEffect(() => {
    if (!loading) {
      setFail("No has iniciado conversaciones con otro usuario aún. Comienza a interactuar con los demás usando el botón de arriba!");
    } else {
      setFail("");
    }
  }, [loading]);
  
  
  const sendMSG = async () => {
    setLoading(true);
    try {
        const res  = await sendMsg(active);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
    setLoading(false);
    return;
  }; 



  return (
    <div className={"w-full p-3 h-full flex flex-row items-start justify-start" + theme.primaryBg}>
      <div className={"w-3/4 h-full p-1 md:p-2 flex flex-col" + theme.mainBg}>
        <div className="w-full h-1/6 px-2 flex flex-col justify-center">
          <h1 className={"text-4xl" + theme.mainText}></h1>
        </div>
        <div className={"w-full h-3/4 m-auto flex flex-col justify-center border-2" + theme.mainBorder}>
          <div className={"text-center" + theme.mainText}>* mensajes intercambiados *</div>
        </div>
        <div className="w-full p-2 mt-2 space-x-2 flex flex-row justify-start">
          <input className={"w-full h-full px-2 rounded-md border" + theme.mainText + theme.mainBg + theme.mainBorder} id="msg" placeholder="Escribe un mensaje"/>
          <button className={"p-3 rounded-lg" + theme.primaryText + theme.lightBg + theme.primaryButton} onClick={sendMSG}><SendIcon/></button>
        </div>
      </div>
      <div className={"w-1/4 h-full p-1 md:p-2 md:pl-0 pl-0 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-full flex flex-col overflow-y-scroll justify-start" + theme.scrollbar + theme.mainText}>
          {!loading && (chats && chats.length > 0) ? chats.map((chat, idx) => {
            return (
            <div className={"w-full flex flex-col overflow justify-start cursor-pointer" + theme.mainText} key={idx} onClick={()=>setActive(chat)}  >
              <h1 className={"text-2xl" + theme.mainText}>{chat.users[0][0]!== localStorage.getItem('userid')? chat.users[0][1]:chat.users[1][1] }</h1>
              
            </div>)
          }) : fail}
        </div>
      </div>
    </div>
  )
}

export default AppContainer