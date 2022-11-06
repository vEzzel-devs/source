import { Tooltip, Zoom } from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function ValueStars({ stars, setStars }) {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="justify-self-end self-end flex flex-row p-2 mb-2">
            {[...Array(stars).keys()].map((idx) => {
                return <button key={`value-star-key-${idx}`} className={"h-8" + theme.mainText} onClick={()=>setStars(idx + 1)}><StarIcon/></button>;
            })}
            {[...Array(5 - stars).keys()].map((idx) => {
                return <button key={`value-star-key-${stars + idx}`} className={"h-8" + theme.mainText} onClick={()=>setStars(stars + idx + 1)}><StarOutlineIcon/></button>;
            })}
            <Tooltip TransitionComponent={Zoom} placement="right" enterDelay={500} title={"Reestablecer"} arrow>
                <button className={"h-8" + theme.primaryText} onClick={()=>setStars(0)}><CachedIcon/></button>
            </Tooltip>
        </div>
    )
}

export default ValueStars