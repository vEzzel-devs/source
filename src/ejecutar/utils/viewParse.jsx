import VButton from "../components/VButton"
import VInput from "../components/VInput"
import VLabel from "../components/VLabel"
import VNote from "../components/VNote"
import VTitle from "../components/VTitle"
import VPlacer from "../components/VPlacer"
import ErrorAlert from "../../components/ErrorAlert"
import { funcParse } from "./funcParse"
import { strParse } from "./strParse"

const views = {
    "button" : VButton,
    "input" : VInput,
    "label" : VLabel,
    "note" : VNote,
    "title" : VTitle,
}

export function viewParse(str, cell) {
    let { parsed, replacer } = strParse(str)
    let pre = parsed.replace(/\s+/g, "");
    pre = pre.slice(0, pre.lastIndexOf(")"));
    let [ sel, params ] = pre.split("(");
    let parseParams = params.split(",");
    if (!parseParams && parseParams < 4) {
        return ({
            "type": "error",
            "comp": <ErrorAlert type={"ViewError:"} content={`La vista definida en la celda [${cell}] necesita más parámetros para funcionar.`}/>
        });
    }
    let [x, y, size, ...custom] = parseParams;
    let Component = views[sel.toLowerCase()];
    let parseCustom = custom.map((element) => {
        let p = element.split("=");
        if (p[0].toLowerCase() === "text") {
            return [p[0], replacer[p[1]]];
        } else {
            return p;
        }
    })
    let props = {};
    switch (sel.toLowerCase()) {
        case "button":
            parseCustom.forEach((element, index) => {
                if (element[0].toLowerCase() === "click") {
                    props = {"click": funcParse(element[1])};
                    parseCustom.splice(index, 1);
                }
            });
        case "input", "label", "note", "title":
            props = {...props, ...parseCustom.reduce((o, element) => {
                return ({...o, [`${element[0].toLowerCase()}`]: element[1]})
            }, {})};
            break;
        default:
            return ({
                "type": "error",
                "comp": <ErrorAlert type={"ViewError:"} content={`La vista "${sel}" definida en la celda [${cell}] no se encuentra definida en el sistema.`}/>
            });
    }
    return ({
        "type": "success",
        "loc": [parseInt(x), parseInt(y)],
        "comp": (
            <VPlacer width={size}>
                <Component {...props}/>
            </VPlacer>
            )
    });
}