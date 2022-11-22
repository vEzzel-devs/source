import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MsgContext } from "../context/MsgContext";
function Message({data,index}) {
    const { active, setActive,setData } = useContext(MsgContext);
    const { theme } = useContext(ThemeContext);
    
    const [content, setContent] = useState('');
    const [side, setSide] = useState('');
    const [time, setTime] = useState('');
    const [userid, setUserid] = useState('');
    useEffect(() => {
        if (data[0]!== localStorage.getItem('userid')){
            setSide("left");
            setUserid(data[0]);
            setContent(data[2]); 
            let strTime = new Date(data[3]);
            setTime(strTime.getHours()+":"+strTime.getMinutes());
        } else {
            setSide("right");
            setUserid(data[1]);
            setContent(data[2]);
            let strTime = new Date(data[3]);
            setTime(strTime.getHours()+":"+strTime.getMinutes());
        }
        
        
      });
    return (
        <div key={index} className={"w-5/6 flex flex-row" + (side === "right" ?  " self-end justify-end" : " self-start justify-start")}>
            {(side === "right") && time && <div className={"self-end px-2 text-xs" + theme.lightText}>{time}</div>}
            <div className={"p-1 px-2 text-md rounded-lg" + theme.lightBg}>
                {content}
            </div>
            {(side === "left") && time && <div className={"self-end px-2 text-xs" + theme.lightText}>{time}</div>}
        </div>
    )
}

export default Message