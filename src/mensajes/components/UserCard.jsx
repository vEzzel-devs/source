import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MsgContext } from "../context/MsgContext";
function UserCard({ data,index }) {
    const { active, setActive,setData } = useContext(MsgContext);
    const { theme } = useContext(ThemeContext);
    const [username, setUsername] = useState('');
    const [userid, setUserid] = useState('');
    const [lastmsg, setLastMsg] = useState('');
    const [msgs, setMsgs] = useState('');

    const switchHandler = () => {
      setActive([userid, username,msgs]);
    };

    useEffect(() => {
      if (data.users[0][0]!== localStorage.getItem('userid')){
        setUserid(data.users[0][0]);
        setUsername(data.users[0][1]);
        setLastMsg(data.msg[data.msg.length-1][2]);
        setMsgs(data.msg);
      } else {
        setUserid(data.users[1][0]);
        setUsername(data.users[1][1]);
        setLastMsg(data.msg[data.msg.length-1][2]);
        setMsgs(data.msg);
      }
      
      
    });
    

    return (
        <div key={`chat-index-${index}`} onClick={switchHandler} className={"w-full h-full p-1 md:p-2 flex flex-col cursor-pointer" + (index % 2 === 1 ? theme.mainBg : theme.highBg) + theme.mainText}>
          <div key={`chat-id-${index}`} className="flex flex-row mb-4 justify-between">
            <h2 className="text-lg md:text-xl xl:text-2xl md:mr-8 truncate">
              {username}
            </h2>
          </div>
          <h3 className={"text-xs" + (index % 2 === 1 ? theme.lightText : theme.mainText)}>
            {lastmsg}
          </h3>
        </div>
    )
}
export default UserCard