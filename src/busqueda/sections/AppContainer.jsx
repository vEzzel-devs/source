import { ThemeContext } from '../../context/ThemeContext'
import { useContext, useEffect, useState } from 'react'
import ProjectCard from "../../components/ProjectCard"
import { SearchContext } from '../context/SearchContext';
import { SystemContext } from '../../context/SystemContext'
import {search} from "../utils/query";

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { setResults, results } = useContext(SearchContext);
  const { loading, setLoading } = useContext(SystemContext);
  const [ fail, setFail ] = useState("")

  useEffect(() => {
    const handleSearch = async () => {
      await new Promise(r => setTimeout(r, 10));
      setLoading(true);
      setFail("No se han encontrado resultados para tu búsqueda...")
      let searchSpread = await search([""], "");
      try {
        if (searchSpread) {
          setResults(searchSpread);
        }
      } catch (e) {
        console.log(e);
      }
    };
    handleSearch();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [results])

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll content-start" + theme.mainBg + theme.scrollbar}>
        {!loading && (results && results.length > 0
          ? results.map((result, idx) => {
            return (
              <div key={`project-result-key-prop-${idx}`} className="w-full h-2/5 flex flex-row px-2">
                <ProjectCard
                  title={result.name}
                  user={result.username}
                  desc={result.description}
                  tags={(result.tags).map(tag => String(tag))}
                  idx={idx}
                  sheetId={result["_id"]}
                  sheetCont={result.content}
                />
              </div>
            );
          })
          : <p className={theme.mainText}>{fail}</p>)}
      </div>
    </div>
  )
}

export default AppContainer