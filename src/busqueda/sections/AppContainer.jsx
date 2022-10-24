import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import ProjectCard from "../../components/ProjectCard"
import { SearchContext } from '../context/SearchContext';
import {search} from "../utils/query";
import { useEffect } from 'react';

function AppContainer() {
  const { theme } = useContext(ThemeContext);
  const { setResults, results } = useContext(SearchContext);

  useEffect(() => {
    const handleSearch = async () => {
      let searchSpread = await search(["tag9"], "");
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

  return (
    <div className={"w-full p-3 h-full flex items-start justify-start" + theme.primaryBg}>
      <div className={"w-full h-full p-4 md:p-8 flex flex-wrap overflow-y-scroll content-start" + theme.mainBg + theme.scrollbar}>
        {results && results.length > 0
          ? results.map((result, idx) => {
            return (
              <ProjectCard
                key={`project-result-key-prop-${idx}`}
                title={result.name}
                user={result.username}
                desc={result.description}
                tags={(result.tags).map(tag => String(tag))}
                idx={idx}
              />
            );
          })
          : <p className={theme.mainText}>No se han encontrado resultados para tu búsqueda...</p>}
      </div>
    </div>
  )
}

export default AppContainer