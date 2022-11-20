import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TopBarContainer from "../components/TopBarContainer";
import Vezzel from "../../components/Vezzel";

function TopBar() {
    const { theme } = useContext(ThemeContext);

    const handlerSearch = () => {
        // TO DO, and maybe refactor
    };

    return (
        <TopBarContainer>
            <Link to="/"><button><Vezzel/></button></Link>
            <div className="w-5/6 space-x-1 flex flex-row justify-center self-center">
                <div className="w-1/2 py-2 space-x-2 flex flex-row self-center content-center">
                <TextField
                    fullWidth
                    placeholder="Buscar"
                    id="input-search"
                    onKeyPress = {(e) =>{if (e.code == "Enter"){handlerSearch()}}}
                    />
                    <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handlerSearch}><SearchIcon/></button>
                </div>
            </div>
        </TopBarContainer>
    )
}

export default TopBar