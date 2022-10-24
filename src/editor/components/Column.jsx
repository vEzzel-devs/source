import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Column({ val }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={"border text-center cursor-default" + theme.highBg + theme.mainText + theme.mainBorder}>{val}</div>
  )
}

export default Column
