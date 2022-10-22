import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function AppContainer() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll" + theme.mainBg + theme.scrollbar}>
        En construccion!
      </div>
    </div>
  )
}

export default AppContainer