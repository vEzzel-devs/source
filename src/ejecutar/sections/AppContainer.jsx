import { ThemeContext } from '../../context/ThemeContext'
import { SystemContext } from '../../context/SystemContext'
import { UserAppContext } from '../context/UserAppContext'
import { CommContext } from '../context/CommContext';
import { UserDataContext } from '../../context/UserDataContext';
import { useContext,useEffect,useState } from 'react'
import CommentCard from '../../components/CommentCard';
import SheetData from '../components/SheetData';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { userApp } = useContext(UserAppContext);
  const { username } = useContext(UserDataContext);
  const { loading } = useContext(SystemContext);
  const { comm, mine } = useContext(CommContext);
  
  const [ fail, setFail ] = useState("")
  let id_user = localStorage.getItem('userid');

  useEffect(() => {
    if (!loading) {
      setFail("No hay comentarios en esta aplicación aún, sé el primero en dar tu opinión con el botón de valoración en la barra de arriba!");
    } else {
      setFail("");
    }
  }, [loading]);
  
  return (
    <div className={"w-full p-3 h-full flex flex-row items-start justify-start" + theme.primaryBg}>
      <div className={"w-3/4 h-full p-1 md:p-2 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-2/3 text-center px-2 flex flex-col justify-center border" + theme.mainBorder + theme.mainText}>
          {(userApp && userApp.length > 0) ? userApp.map((row) => {
            return (
              <div className="w-full py-2 flex flex-row flex-wrap">
                { row }
              </div>
            );
          }) : "El usuario no ha utilizado elementos visuales..."}
        </div>
        <div className="w-full h-1/3 mt-2 flex flex-col justify-start">
          <SheetData/>
        </div>
      </div>
      <div className={"w-1/4 h-full p-1 md:p-2 md:pl-0 pl-0 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-full flex flex-col overflow-y-scroll justify-start" + theme.scrollbar}>
          {!loading && mine != undefined && (
              <div className="w-full h-1/4 flex flex-none">
                <CommentCard title={username} desc={mine.comment} stars={mine.score} idx={0}/>
              </div>)
          }
          {!loading && ((comm && comm.length > 0) ? comm.map((props, idx) => {
            if (props.desc === "" || props["user_id"] === id_user) {
              return undefined;
            }
            return (
              <div key={`comment-${idx}-on-this-sheet`} className="w-full h-1/4 flex flex-none">
                <CommentCard title={props.username} desc={props.comment} stars={props.score} idx={idx + (mine ? 1 : 0)}/>
              </div>);
          }) : !mine && <p className={theme.mainText}>{fail}</p>)}
          {!loading && ((comm && comm.length > 0) && comm.every(e => !e)) && <p className={theme.mainText}>{fail}</p>}
        </div>
      </div>
    </div>
  )
}

export default AppContainer