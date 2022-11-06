import { useContext,useEffect,useState } from "react";
import DoubleStars from "../../components/DoubleStars";
import { ThemeContext } from "../../context/ThemeContext";
import {getOneSpread} from "../utils/query";
import { SystemContext } from '../../context/SystemContext'
function SheetData() {
    const { theme } = useContext(ThemeContext);
    const { loading,setLoading,reload,setReload } = useContext(SystemContext);

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");
    const [stars,setStars] = useState(0);
    useEffect(() => {
      async function first() {
        await new Promise(r => setTimeout(r, 10));
        setLoading(true);
        try {
            const res  = await getOneSpread();
            setStars(res.score);
            setDesc(res.description);
            setTitle(res.name);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
        return;
      }
      first();
    }, []);
    const getSpread = async () => {
      try {
          const res  = await getOneSpread();
          setStars(res.score);
          setDesc(res.description);
          setTitle(res.name);
      } catch (err) {
          console.log(err);
      }
      setReload(false);
      return;
    };
    useEffect(() => {
      getSpread();
      
    }, [reload]);

    return (
      <div className={"h-full flex flex-col justify-start" + theme.mainText}>
        <div className="w-full pt-1 px-2 md:px-4 flex flex-row justify-between">
          <h1 className="text-2xl md:text-3xl">{title}</h1>
          <DoubleStars value={stars}/>
        </div>
        <div className={"w-full h-full mt-3 px-2 md:px-4 flex flex-row overflow-y-scroll" + theme.scrollbar}>
          <p className={"text-sm md:text-md" + theme.lightText}>{desc}</p>
        </div>
      </div>
    )
}

export default SheetData