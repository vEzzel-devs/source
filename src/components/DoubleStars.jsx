import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function DoubleStars({ value }) {
    const { theme } = useContext(ThemeContext);
    let val1 = Math.round(value * 2);
    let val2 = Math.floor(val1 / 2), val3 = val1 % 2;
    let val4 = 5 - val2 - val3;

    return (
        <div className="flex flex-row justify-self-end">
            {[...Array(val2).keys()].map((idx) => {
                return <span key={`value-star-key-${idx}`} className={"h-8" + theme.mainText}><StarIcon/></span>;
            })}
            {val3 > 0 &&
                <span className={"h-8" + theme.mainText}><StarHalfIcon/></span>
            }
            {[...Array(val4).keys()].map((idx) => {
                return <span key={`value-star-key-${val2 + idx}`} className={"h-8" + theme.mainText}><StarOutlineIcon/></span>;
            })}
        </div>
    )
}

export default DoubleStars