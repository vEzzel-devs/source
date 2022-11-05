import { ThemeContext } from '../../context/ThemeContext'
import { UserAppContext } from '../context/UserAppContext'
import { useContext } from 'react'

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { userApp } = useContext(UserAppContext);

  /*
  {userApp.map((row) => {
    return (
      <div className="w-full py-2 flex flex-row">
        { row }
      </div>
    );
  })}
  */

  return (
    <div className={"w-full p-3 h-full flex flex-row items-start justify-start" + theme.primaryBg}>
      <div className={"w-3/4 h-full p-1 md:p-2 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-2/3 flex flex-col justify-center border-2" + theme.mainBorder}>
          <div className={"text-center" + theme.mainText}>app corriendo</div>
        </div>
        <div className={"w-full h-1/3 mt-2 flex flex-col justify-center border-2" + theme.mainBorder}>
          <div className={"text-center" + theme.mainText}>info</div>
        </div>
      </div>
      <div className={"w-1/4 h-full p-1 md:p-2 md:pl-0 pl-0 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-full flex flex-col overflow-y-scroll justify-center border-2" + theme.mainBorder + theme.scrollbar}>
          <div className={"text-center" + theme.mainText}>comentarios</div>
        </div>
      </div>
    </div>
  )
}

export default AppContainer