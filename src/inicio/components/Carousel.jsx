import { useState, useEffect } from 'react'
import Slide from './Slide'

function Carousel() {
  const [active , setActive] = useState(0);
  const [slides , setSlides] = useState([
    " relative",
    " hidden",
    " hidden",
    " hidden",
    " hidden",
  ]);

  useEffect(() => {
    setSlides(slides.map((_, index) => {
      if (index === active) {
        return " relative";
      } else {
        return " hidden";
      }
    }))
  }, [active]);

  return (
    <div className="carousel w-full">
      {slides.map((visibility, index) => {
        return (
          <div key={"slide-key-" + index} className={"relative flex justify-between transform px-8 top-1/2 w-full" + visibility}>
            <Slide
              next={() => {setActive((active+1) % slides.length)}}
              prev={() => {setActive((active-1 < 0) ? slides.length-1 : active-1)}}
              id={index}/>
          </div>);
      })}
    </div>
  )
}

export default Carousel