import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ContainerBox(props) {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="md:w-2/3 m-auto max-h-screen h-screen flex flex-col">
          <div className={"my-auto py-12 md:py-20 justify-center items-center rounded-lg" + theme.mainBg}>
            { props.children }
          </div>
        </div>
    )
}

export default ContainerBox