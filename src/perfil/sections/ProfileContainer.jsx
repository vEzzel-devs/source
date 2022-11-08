import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState, useEffect } from "react";
import CommentCard from "../../components/CommentCard";
import { Tooltip, Zoom } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { edit_username, } from "../utils/query";
import { SystemContext } from "../../context/SystemContext";
import { UserDataContext } from "../../context/UserDataContext";
import { FilterContext } from "../context/FilterContext";
import StatGrid from "../components/StatGrid";

function ProfileContainer() {
  const { theme } = useContext(ThemeContext);
  const { comments, username, setUsername } = useContext(UserDataContext);
  const { loading, setLoading } = useContext(SystemContext);
  const { detect, rankText } = useContext(FilterContext);
  const [ prev, setPrev ] = useState(username);
  const [ fail, setFail ] = useState("");
  const [ editing, setEditing ] = useState(false);
  const [ realCards, setRealCards ] = useState(comments);

  useEffect(() => {
    if (!loading) {
      setFail("No has comentado nada en ningún proyecto aún, visita los proyectos de otros usuarios para cambiar eso.")
    } else {
      setFail("");
    }
  }, [loading]);

  const handleSubmit = async () => {
    setLoading(true);
    let edit_user = await edit_username(prev);
    setLoading(false);
    await new Promise(r => setTimeout(r, 10));
    if (edit_user?.status==200) {
        setUsername(prev);
    } else {
      alert(edit_user.message);
    }
    let entry = document.getElementById("username");
    setEditing(false);
    entry.disabled = false;
  };

  const changeHandler = (event) => {
    setPrev(event.target.value);
  };

  const startEditing = () => {
    let entry = document.getElementById("username");
    setEditing(true);
    entry.disabled = false;
    entry.focus();
  };

  const stopEditing = async () => {
    let entry = document.getElementById("username");
    setEditing(false);
    setPrev(username);
    entry.disabled = false;
  }

  useEffect(() => {
    let oldCards = [...comments];
    let arr = oldCards.filter((card) => {
      let txt = [card.spreadname, card.comment].join(" ");
      return rankText(txt) > 0;
    })
    setRealCards(arr);
  }, [comments, detect]);

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-2 md:py-4" + theme.mainBg + theme.mainText}>
        <div className={"h-1/3 md:mx-16 p-2 border-b cursor-default flex flex-col md:flex-row" + theme.mainBorder}>
          <div className="md:w-1/2 h-full flex flex-col justify-center">
            <h1 className="text-5xl">Bienvenid@,</h1>
            <div className="h-1/3 flex flex-row">
              <input
                type="text"
                id="username"
                className={"w-4/5 text-4xl" + theme.mainBg + theme.primaryText}
                value={prev}
                onChange={changeHandler}
                disabled/>
              <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={(editing ? "Aceptar" : "Cambiar nombre")} arrow>
                {editing ? <button className={" h-1/3 self-end cursor-pointer" + theme.primaryText} onClick={handleSubmit}><DoneIcon/></button> : <button className={" h-1/3 self-end cursor-pointer" + theme.primaryText} onClick={startEditing}><EditIcon/></button>}
              </Tooltip>
              {editing && <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={"Cancelar"} arrow>
                <button className={" h-1/3 self-end cursor-pointer" + theme.primaryText} onClick={stopEditing}><CloseIcon/></button>
              </Tooltip>}
            </div>
          </div>
          <div className="md:w-1/2 h-full flex flex-col items-start justify-center">
            <h1 className={"self-center text-3xl text-center border-b" + theme.mainBorder}>Estadísticas</h1>
            <StatGrid/>
          </div>
        </div>
        <div className={"w-full h-2/3 p-2 md:p-6 flex flex-wrap overflow-y-scroll content-start" + theme.scrollbar}>
        {!loading && ((comments && comments.length > 0) ? realCards.map((card, idx) => {
            return (
              <div  key={`comment-card-key-prop-${idx}`} className="w-full h-2/5 flex">
                <CommentCard title={card.spreadname} desc={card.comment} stars={card.score} idx={idx} redirect={card["spread_id"]}/>
              </div>);
          }) : <p className={theme.mainText}>{fail}</p>)}
          {(comments && comments.length > 0 && realCards.length === 0) && <p className={theme.mainText}>No existen comentarios con las características buscadas...</p>}
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
