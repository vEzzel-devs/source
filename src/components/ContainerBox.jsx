import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ContainerBox(props) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="w-2/3 m-auto max-h-screen h-screen flex flex-col">
          <div className={"my-auto py-28 rounded-lg" + theme.mainBg}>
            { props.children }
          </div>
        </div>
    )
}

export default ContainerBox