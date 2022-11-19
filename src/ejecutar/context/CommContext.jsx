import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import { SystemContext } from "../../context/SystemContext";
import { UserDataContext } from "../../context/UserDataContext";
import { getSpreadComm } from "../utils/query";

export const CommContext = createContext();
export function CommContextProvider(props) {
    const { comments } = useContext(UserDataContext);
    const { sheetConfig } = useContext(SpreadSheetContext);
    const { setLoading } = useContext(SystemContext);
    const [ comm, setComm ] = useState([]);
    const [ mine, setMine ] = useState(undefined);

    const getComm = async () => {
        setLoading(true);
        try {
            const res  = await getSpreadComm(); 
            setComm(res);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
        return;
    };
    useEffect(() => {
        getComm();
    }, []);

    useEffect(() => {
        let detect = comments.find((element) => {
          return element["spread_id"] == sheetConfig.id;
        })
        if (detect) {
          setMine(detect);
        } else {
          setMine(undefined);
        }
    }, [comments])

    return (
        <CommContext.Provider value={({comm, mine})}>
            {props.children}
        </CommContext.Provider>
    )

}