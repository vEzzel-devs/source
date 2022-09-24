import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ContainerBox(props) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="md:w-2/3 m-auto max-h-screen h-screen flex flex-col">
          <div className={"my-auto py-16 md:py-28 justify-center items-center rounded-lg" + theme.mainBg}>
            { props.children }
          </div>
        </div>
    )
}

export default ContainerBox