import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'

function Vessel({ cell }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <input name={cell} placeholder={cell} className={"border text-center" + theme.mainBorder + theme.mainBg}/>
    </>
  )
}

export default Vessel