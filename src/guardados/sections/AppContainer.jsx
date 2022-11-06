import { ThemeContext } from '../../context/ThemeContext'
import { UserDataContext } from '../../context/UserDataContext';
import { useContext } from 'react'
import ProjectCard from "../../components/ProjectCard"
import DeleteDialog from '../components/DeleteDialog';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { cards, setCards } = useContext(UserDataContext);

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll content-start" + theme.mainBg + theme.scrollbar}>
        {cards.map((card, idx) => {
            return (
              <div key={`project-card-key-prop-${idx}`} className="w-full h-2/5 flex flex-row px-2">
                <ProjectCard
                  title={card.name}
                  desc={card.description}
                  tags={(card.tags).map(tag => String(tag))}
                  score={card.score}
                  route="/edit"
                  idx={idx}
                  sheetId={card["_id"]}
                  sheetCont={card.content}
                />
                <DeleteDialog
                  itemId={card["_id"]}
                  itemName={card.name}
                  idx={idx}
                  takeMeOut={()=>{
                    let aux = [...cards];
                    aux.splice(idx, 1);
                    setCards(aux);
                  }}/>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default AppContainer