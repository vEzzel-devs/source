import { ThemeContext } from '../../context/ThemeContext'
import { UserDataContext } from '../../context/UserDataContext';
import { useContext, useEffect, useState } from 'react'
import ProjectCard from "../../components/ProjectCard"
import DeleteDialog from '../components/DeleteDialog';
import { SystemContext } from '../../context/SystemContext';
import { FilterContext } from '../context/FilterContext';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { cards, setCards } = useContext(UserDataContext);
  const { loading } = useContext(SystemContext);
  const { detect, rankText } = useContext(FilterContext);
  const [ fail, setFail ] = useState("");
  const [ realCards, setRealCards ] = useState(cards);

  useEffect(() => {
    if (!loading) {
      setFail("No has creado ningún proyecto aún, crea el primero en la barra de herramientas de arriba!")
    } else {
      setFail("");
    }
  }, [loading]);

  useEffect(() => {
    let oldCards = [...cards];
    let arr = oldCards.filter((card) => {
      let txt = [card.name, card.description].join(" ");
      return rankText(txt) > 0;
    })
    setRealCards(arr);
    console.log(arr)
  }, [cards, detect]);

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll content-start" + theme.mainBg + theme.scrollbar}>
        {!loading && ((cards && cards.length > 0) ? realCards.map((card, idx) => {
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
          }) : <p className={theme.mainText}>{fail}</p>)}
          {(cards && cards.length > 0 && realCards.length === 0) && <p className={theme.mainText}>No existen proyectos con las características buscadas...</p>}
      </div>
    </div>
  )
}

export default AppContainer