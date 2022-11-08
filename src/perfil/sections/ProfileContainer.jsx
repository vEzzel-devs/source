import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import CommentCard from "../../components/CommentCard";
import { Tooltip, Zoom } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { edit_username, } from "../utils/query";
import { SystemContext } from "../../context/SystemContext";
import { UserDataContext } from "../../context/UserDataContext";

function ProfileContainer() {
  const { theme } = useContext(ThemeContext);
  const { comments, username, setUsername } = useContext(UserDataContext);
  const { setLoading } = useContext(SystemContext);
  const [ prev, setPrev ] = useState(username);
  const [ editing, setEditing ] = useState(false);

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

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-2 md:py-4" + theme.mainBg + theme.mainText}>
        <div className={"h-1/3 md:mx-16 p-2 border-b flex flex-col md:flex-row" + theme.mainBorder}>
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
              <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={(editing ? "Aceptar" : "Editar")} arrow>
                {editing ? <button className={" h-1/3 self-end cursor-pointer" + theme.primaryText} onClick={handleSubmit}><DoneIcon/></button> : <button className={" h-1/3 self-end cursor-pointer" + theme.primaryText} onClick={startEditing}><EditIcon/></button>}
              </Tooltip>
              {editing && <Tooltip TransitionComponent={Zoom} placement="top" enterDelay={500} title={"Cancelar"} arrow>
                <button className={" h-1/3 self-end cursor-pointer" + theme.primaryText} onClick={stopEditing}><CloseIcon/></button>
              </Tooltip>}
            </div>
          </div>
          <div className="md:w-1/2 h-full flex items-start justify-center">
            <h1 className={"text-3xl text-center border-b" + theme.mainBorder}>Estadísticas</h1>
          </div>
        </div>
        <div className={"w-full h-2/3 p-2 md:p-6 flex flex-wrap overflow-y-scroll content-start" + theme.scrollbar}>
          {comments.map((card, idx) => {
            return (
              <div  key={`comment-card-key-prop-${idx}`} className="w-full h-2/5 flex">
                <CommentCard title={card.spreadname} desc={card.comment} stars={card.score} idx={idx} redirect={card["spread_id"]}/>
              </div>);
          })}
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
