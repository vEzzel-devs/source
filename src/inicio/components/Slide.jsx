import { ThemeContext } from '../../context/ThemeContext'
import { CarrouselContext } from '../context/CarrouselContext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext } from 'react'

function Slide({next, prev, id}) {
  const { theme } = useContext(ThemeContext);
  const { text, multimedia } = useContext(CarrouselContext);

  return (
    <>
      <div className="w-1/3 m-auto">
        <h1 className={"text-4xl" + theme.mainText}>{text[id].title}</h1>
        <br/>
        <h3 className={"text-lg" + theme.lightText}>{text[id].body}</h3>
      </div>
      <div className="w-1/2 max-h-screen h-screen flex items-center">
        <img src={multimedia[id]} className="w-full"/>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <button onClick={prev} className={"pl-3 pr-1 rounded-full" + theme.hoverNavbar}>
        <ArrowBackIosIcon className={theme.lightText}/>
      </button> 
      <button onClick={next} className={"p-2 rounded-full" + theme.hoverNavbar}>
      <ArrowForwardIosIcon className={theme.lightText}/>
      </button>
      </div>
    </>
  )
}

export default Slide