import { ThemeContext } from '../../context/ThemeContext'
import { useContext, useState, useEffect } from 'react'
import ProjectCard from "../../components/ProjectCard"
import DeleteDialog from '../components/DeleteDialog';
import {spreadsheet} from "../utils/query";

function AppContainer() {
  const { theme } = useContext(ThemeContext);
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
              <div key={`project-card-key-prop-${idx}`} className="w-full h-2/5 flex flex-row px-2">
                <DeleteDialog
                  itemId={card["_id"]}
                  itemName={card.name}
                  idx={idx}
                  takeMeOut={()=>{
                    let aux = [...cards];
                    aux.splice(idx, 1);
                    setCards(aux);
                  }}/>
                <ProjectCard
                  title={card.name}
                  desc={card.description}
                  tags={(card.tags).map(tag => String(tag))}
                  idx={idx}
                  sheetId={card["_id"]}
                  sheetCont={card.content}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default AppContainer