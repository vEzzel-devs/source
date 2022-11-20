import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MsgContext } from "../context/MsgContext";

function UserCard({ name, last, idx }) {
    const { active, setActive } = useContext(MsgContext);
    const { theme } = useContext(ThemeContext);

    const switchHandler = () => {
      if (idx != active) {
        setActive(idx);
      }
    };

    return (
      <>
        <div onClick={switchHandler} className={"w-full h-full p-1 md:p-2 flex flex-col cursor-pointer" + (idx % 2 === 1 ? theme.mainBg : theme.highBg) + theme.mainText}>
          <div className="flex flex-row mb-4 justify-between">
            <h2 className="text-lg md:text-xl xl:text-2xl md:mr-8 truncate">
              {name}
            </h2>
          </div>
          <h3 className={"text-xs" + (idx % 2 === 1 ? theme.lightText : theme.mainText)}>
            {last}
          </h3>
        </div>
      </>
    )
}
export default UserCard