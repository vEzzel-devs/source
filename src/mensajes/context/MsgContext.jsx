import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { SystemContext } from "../../context/SystemContext";
import { getUserChats } from "../utils/query";
import { io } from "socket.io-client"

export const MsgContext = createContext();
export function MsgContextProvider(props) {
    const { setLoading } = useContext(SystemContext);
    const [ chats, setChats ] = useState([]);
    const [ active, setActive ] = useState([]);
    const [msg, setMsg] = useState([]);
    const [socketinstance, setSocketinstance] = useState("");

    

    const getChats = async () => {
        try {
            const res  = await getUserChats(); 
            setChats(res);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        setLoading(true);
        const socket = io("http://127.0.0.1:5000/", {
        transports: ["polling"],
        cors: {
            origin: "http://127.0.0.1:5000/",
        },
        });

        setSocketinstance(socket);
        setLoading(false);
        socket.on("data", (data) => {
            if (data.data[1]===localStorage.getItem('userid') && data.data!==msg[msg.length-1]) {
                setMsg(data.data);
            }if (data.data[0]===localStorage.getItem('userid') && data.data!==msg[msg.length-1]) {
                setMsg(data.data);
            }
        });
    
    }, []);
    const updateActive = () => {
        let newsmsg = chats.filter((chat) => chat.users[0][0] === active[0] || chat.users[1][0] === active[0]);

        newsmsg = newsmsg[0];
        setActive([active[0], active[1], newsmsg.msg]);
    };
    useEffect(() => {
        getChats();
    }, [msg]);
    useEffect(() => {
        if (active.length !== 0) {
            updateActive();
        }
    }, [chats]);

    const changeActive = (id) => {
        let newsmsg = chats.filter((chat) => chat.users[0][0] === id || chat.users[1][0] === id);
        newsmsg = newsmsg[0];
        if (newsmsg.users[0][0]!== localStorage.getItem('userid')){
            setActive([newsmsg.users[0][0], newsmsg.users[0][1], newsmsg.msg]);
          } else {
            setActive([newsmsg.users[1][0], newsmsg.users[1][1], newsmsg.msg]);
          }
    };

    // usar la variable active para indicar que mensajes estan siendo
    // cargados en tiempo real, los demas se cargaran desde la db al refrescar

    return (
        <MsgContext.Provider value={({changeActive,getChats,socketinstance,chats, active, setActive,msg})}>
            {props.children}
        </MsgContext.Provider>
    )

}