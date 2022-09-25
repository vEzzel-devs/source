import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Row({ val }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"border text-center cursor-default" + theme.highBg + theme.activeNavbar + theme.mainText + theme.mainBorder}>{val}</div>
  )
}

export default Row
