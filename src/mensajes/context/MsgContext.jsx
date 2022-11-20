import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { SystemContext } from "../../context/SystemContext";
import { getUserChats } from "../utils/query";

export const MsgContext = createContext();
export function MsgContextProvider(props) {
    const { setLoading } = useContext(SystemContext);
    const [ chats, setChats ] = useState([]);
    const [ active, setActive ] = useState(0);

    const getChats = async () => {
        setLoading(true);
        try {
            const res  = await getUserChats(); 
            setChats(res);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
        return;
    };
    useEffect(() => {
        getChats();
    }, []);

    // use active to set which messages are being loaded

    return (
        <MsgContext.Provider value={({chats, active, setActive})}>
            {props.children}
        </MsgContext.Provider>
    )

}