import { ThemeContext } from '../../context/ThemeContext'
import { UserAppContext } from '../context/UserAppContext'
import { useContext } from 'react'
import CommentCard from '../../components/CommentCard';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { userApp } = useContext(UserAppContext);

  // query de carga de comentarios, y posterior loop sobre el div de comentarios
  const ph = [
    {title: "User1", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph. Lorem ipsum and anything else that is supposed to be in a paragraph. Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 1},
    {title: "User2", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 2},
    {title: "User3", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 3},
    {title: "User4", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 4},
    {title: "User5", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 5},
    {title: "User1", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 1},
    {title: "User2", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 2},
    {title: "User3", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 3},
    {title: "User4", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 4},
    {title: "User5", desc: "Lorem ipsum and anything else that is supposed to be in a paragraph", stars: 5},
  ]

  return (
    <div className={"w-full p-3 h-full flex flex-row items-start justify-start" + theme.primaryBg}>
      <div className={"w-3/4 h-full p-1 md:p-2 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-2/3 flex flex-col justify-center border-2" + theme.mainBorder}>
          <div className={"text-center" + theme.mainText}>app corriendo</div>
        </div>
        <div className={"w-full h-1/3 mt-2 flex flex-col justify-center border-2" + theme.mainBorder}>
          <div className={"text-center" + theme.mainText}>info</div>
        </div>
      </div>
      <div className={"w-1/4 h-full p-1 md:p-2 md:pl-0 pl-0 flex flex-col" + theme.mainBg}>
        <div className={"w-full h-full flex flex-col overflow-y-scroll justify-start" + theme.scrollbar}>
          {ph.map((props, idx) => {
            if (props.desc === "") {
              return <></>;
            }
            return <CommentCard {...props} idx={idx} key={`comment-${idx}-on-this-sheet`}/>;
          })}
        </div>
      </div>
    </div>
  )
}

export default AppContainer

/*
  {userApp.map((row) => {
    return (
      <div className="w-full py-2 flex flex-row">
        { row }
      </div>
    );
  })}
*/