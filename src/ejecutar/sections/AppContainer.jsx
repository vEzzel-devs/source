import { ThemeContext } from '../../context/ThemeContext'
import { UserAppContext } from '../context/UserAppContext'
import { useContext } from 'react'

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { userApp } = useContext(UserAppContext)

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll" + theme.mainBg + theme.scrollbar}>
        {userApp.map((row) => {
          return (
            <div className="w-full py-2 flex flex-row">
              { row };
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default AppContainer