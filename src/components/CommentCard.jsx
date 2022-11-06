import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

function CommentCard({ title, desc, stars, idx }) {

    const { theme } = useContext(ThemeContext);

    return (
      <div className="w-full h-1/4 flex flex-none">
        <div className={"w-full h-full p-1 md:p-2 flex flex-col" + (idx % 2 === 1 ? theme.mainBg : theme.highBg) + theme.mainText}>
          <div className="flex flex-row mb-4 justify-between">
            <h2 className="text-lg md:text-xl xl:text-2xl md:mr-8">
                {title}
            </h2>
            <div>
              {[...Array(stars).keys()].map((i) => {
                  return <span key={`comm-${idx}-value-star-key-${i}`} className={"h-8" + theme.mainText}><StarIcon/></span>;
              })}
              {[...Array(5 - stars).keys()].map((i) => {
                  return <span key={`comm-${idx}-value-star-key-${stars + i}`} className={"h-8" + theme.mainText}><StarOutlineIcon/></span>;
              })}
            </div>
          </div>
          <h3 className={"text-xs" + (idx % 2 === 1 ? theme.lightText : theme.mainText)}>{desc}</h3>
        </div>
      </div>
    )
}
export default CommentCard