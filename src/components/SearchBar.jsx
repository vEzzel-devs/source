import { ThemeContext } from "../context/ThemeContext";
import { useState, useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { theme } = useContext(ThemeContext);
  const [search, setSearch] = useState("");
  const [setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (dir) => {
    navigate("/search/" + dir);
  };

  return (
    <div className={"w-full h-24 p-4 md:p-8 flex-col overflow-y-scroll" + theme.mainBg + theme.scrollbar + theme.iconHover}>
        <form
          className="relative mx-auto w-max inset-x-0 top-0"
          autocomplete="off"
          onSubmit={(ev) => {
            ev.preventDefault();
            console.log(ev.target.search.value);
            /* handleSubmit(ev.target.search.value); */
          }}
        >
          <SearchIcon
            className={"absolute inset-y-0 inset-x-3 my-auto border-r border-transparent" + theme.iconHover}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          />
          <input
            type="search"
            id="search"
            className={"peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:pl-16 focus:pr-4" + theme.searchbar}
            autoFocus/>
        </form>
      </div>
  );
}

export default SearchBar;
