import { ThemeContext } from '../../context/ThemeContext'
import { SystemContext } from '../../context/SystemContext'
import { UserAppContext } from '../context/UserAppContext'
import { useContext,useEffect,useState } from 'react'
import CommentCard from '../../components/CommentCard';
import {getSpreadComm} from "../utils/query";
import SheetData from '../components/SheetData';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { userApp } = useContext(UserAppContext);
  const { setLoading } = useContext(SystemContext);
  const [ comm, setComm ] = useState([]);

  useEffect(() => {
    async function getComm() {
      await new Promise(r => setTimeout(r, 10));
      setLoading(true);
      try {
          const res  = await getSpreadComm(); 
          console.log(res);
          setComm(res);
      } catch (err) {
          console.log(err);
      }
    }
    getComm();
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [comm]);
  
  return (
    <div className={"w-full p-3 h-full flex flex-row items-start justify-start" + theme.primaryBg}>
      <div className={"w-3/4 h-full p-1 md:p-2 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-2/3 flex flex-col justify-center border-2" + theme.mainBorder}>
          <div className={"text-center" + theme.mainText}>*aplicación funcionando*</div>
        </div>
        <div className="w-full h-1/3 mt-2 flex flex-col justify-start">
          <SheetData/>
        </div>
      </div>
      <div className={"w-1/4 h-full p-1 md:p-2 md:pl-0 pl-0 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-full flex flex-col overflow-y-scroll justify-start" + theme.scrollbar}>
          {comm.map((props, idx) => {
            if (props.desc === "") {
              return <></>;
            }
            return <CommentCard title={props.username} desc={props.comment} stars={props.score} idx={idx} key={`comment-${idx}-on-this-sheet`}/>;
          })}
        </div>
      </div>
    </div>
  )
}

export default AppContainer

/*
  {userApp.map((row) => {
    return (
      <div className="w-full py-2 flex flex-row">
        { row }
      </div>
    );
  })}
*/