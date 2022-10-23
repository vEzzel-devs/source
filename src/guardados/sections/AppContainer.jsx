import { ThemeContext } from '../../context/ThemeContext'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard"
import {spreadsheet} from "../utils/query";

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
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

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll content-start" + theme.mainBg + theme.scrollbar}>
        {cards.map((card, idx) => {
            return (
              <ProjectCard
                key={`project-card-key-prop-${idx}`}
                title={card.name}
                desc={card.description}
                tags={(card.tags).map(tag => String(tag))}
                idx={idx}
              />
            )
          })}
      </div>
    </div>
  )
}

export default AppContainer