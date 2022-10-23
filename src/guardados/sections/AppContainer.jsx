import { ThemeContext } from '../../context/ThemeContext'
import { useContext,useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard"
import {spreadsheet} from "../utils/query";

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const loadCards = () => {
    const [cards, setCards] = useState([]);
    
    useEffect( () => { 
        async function fetchData() {
            try {
                const res  = await spreadsheet(); 
                setCards(res);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return cards.map((card) => {
      console.log(card.name, card.description, (card.tags).map(tag => String(tag)), card._id);
      return (
        <ProjectCard
          title={card.name}
          name={card.username}
          desc={card.description}
          tags={(card.tags).map(tag => String(tag))}
          idx={card._id}
        />
      );
    });
}


  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
        <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll" + theme.mainBg + theme.scrollbar}>
          {loadCards()}
        </div>
      </div>
    </div>
  )
}

export default AppContainer