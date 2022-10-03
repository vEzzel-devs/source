import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { UserAppContext } from "../context/UserAppContext";

function VInput({cell, value, bg, color}) {
    const entry = useRef();
    const { theme } = useContext(ThemeContext);
    const { changeValOf } = useContext(UserAppContext);

    const update = () => {
        let cont = entry.current.value;
        let contType = "";
        if (isNaN(cont)) {
            contType = "String";
          } else {
            if (cont.includes(".")) {
              contType = "Float";
            } else {
              contType = "Integer";
            }
          }
        changeValOf({
            "ref": cell,
            "cell": {
                "cls": "basic",
                "type": contType,
                "cont": cont,
            },
            "display": () => `${this.cell.cont}`,
            "hover": () => `${this.cell.cls} cell :${this.cell.type}`,
        });
    };

    return (
        <input ref={entry} onChange={update} id={"in-" + cell} placeholder={value?value:"Ingrese datos"} className={"w-full m-2 border" + (bg ? ` bg-[${bg}]` : theme.mainBg) + (color ? ` text-[${color}]` : theme.mainText) + theme.mainBorder}/>
    )
}

export default VInput