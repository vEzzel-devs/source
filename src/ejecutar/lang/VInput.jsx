import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserAppContext } from "../context/UserAppContext";

function VInput({cell, placeholder, value}) {
    const entry = useRef();
    const { theme } = useContext(ThemeContext);
    const { changeCell } = useContext(UserAppContext);
    
    useEffect(() => {
      const wait = async () => {
        await new Promise(r => setTimeout(r, 10));
        entry.current.value = value;
      };
      wait();
    }, []);

    const update = () => {
        let cont = entry.current.value;
        changeCell(cell, {
            "ref": cell,
            "cell": {
                "cls": "view",
                "type": "String",
                "cont": `/input("${placeholder}", "${cont}")`,
            },
            "display": () => `${this.cell.cont}`,
            "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
        });
    };

    return (
        <input ref={entry} onChange={update} id={"in-" + cell} placeholder={placeholder} className={"w-full p-1 self-center border" + theme.mainBg + theme.mainText + theme.mainBorder}/>
    )
}

export default VInput