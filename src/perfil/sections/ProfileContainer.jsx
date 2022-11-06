import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState, useEffect } from "react";
import CommentCard from "../../components/CommentCard";
import EditIcon from "@mui/icons-material/Edit";
import { edit_username, comments } from "../utils/query";

function ProfileContainer() {
  const { theme } = useContext(ThemeContext);
  const [cards, setCards] = useState([]);

  useEffect( () => { 
    async function fetchData() {
        try {
            const res  = await comments(); 
            setCards(res);
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
  }, []);

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll content-start" + theme.mainBg + theme.scrollbar}>
        <div className="w-full h-1/3 grid grid-cols-3">
          <div className="col-start-1 col-span-2 grid grid-rows-3 gap-4">
            <div>
              <input
                type="text"
                id="username"
                className={"text-5xl font-medium w-3/5" + theme.primaryText + theme.mainBg}
                placeholder="Name test"
                disabled/>
              
              <EditIcon
                className={theme.primaryText}
                onClick={
                  function () {
                    if (document.getElementById("username").disabled === true) {
                      document.getElementById("username").disabled = false;
                    } else {
                      document.getElementById("username").disabled = true;
                      console.log(username.value);
                      edit_username(username.value);
                    }
                  }
                }/>
            </div>
            
            
          </div>
          <div className="col-start-3">
            <div className={"text-4xl font-medium" + theme.primaryText}>
              Estadisticas
            </div>
            <div>
            </div>
          </div>
        </div>
          {cards.map((card, idx) => {
            return (
              <div key={`project-card-key-prop-${idx}`} className="w-full h-2/5 flex flex-row px-2">
                <CommentCard
                  title={card.spreadname} desc={card.comment} stars={card.score} idx={idx}/>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default ProfileContainer;
