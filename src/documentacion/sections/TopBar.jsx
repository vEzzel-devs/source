import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DocsRouteContext } from "../context/DocsRouteContext";
import { Link } from "react-router-dom";
import { TextField, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import TopBarContainer from "../components/TopBarContainer";

function TopBar() {
    const { theme } = useContext(ThemeContext);
    const { nav } = useContext(DocsRouteContext);

    const handlerSearch = () => {
        let ac = document.getElementById("auto-complete");
        location.hash = ac.value;
    };

    return (
        <TopBarContainer>
            <Link to="/"><div className={"flex flex-shrink-0 mb-1 items-center" + theme.mainText}>
                <ReplyRoundedIcon/>
                <em className="flex flex-none ml-2 hidden md:block">Volver a</em>
                <img className="block h-8 ml-2 w-auto lg:block" src={theme.folder + "/banner.png"} alt="vEzzel banner"/>
            </div></Link>
            <div className="w-5/6 space-x-1 flex flex-row justify-center self-center">
                <div className="w-1/2 py-2 space-x-2 flex flex-row self-center content-center">
                <Autocomplete
                    fullWidth
                    options={nav}
                    disableClearable
                    popupIcon={""}
                    id="auto-complete"
                    placeholder="Buscar"
                    onKeyPress = {(e) =>{if (e.code == "Enter"){handlerSearch()}}}
                    autoComplete
                    includeInputInList
                    renderInput={(params) => (
                    <TextField {...params} placeholder={"Buscar en esta sección"}/>
                    )}
                />
                <button className={"p-3 rounded-lg" + theme.primaryText + theme.mainBg + theme.primaryButton} onClick={handlerSearch}><SearchIcon/></button>
                </div>
            </div>
        </TopBarContainer>
    )
}

export default TopBar