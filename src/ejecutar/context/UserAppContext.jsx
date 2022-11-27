import { useContext, useEffect } from "react";
import { useState, createContext } from "react";
import { SpreadSheetContext } from "../../context/SpreadSheetContext";
import Notification from "../../components/Notification";

import VContainer from "../lang/VContainer";
import VInput from "../lang/VInput";
import VButton from "../lang/VButton";
import VText from "../lang/VText";
import VLabel from "../lang/VLabel";
import { start_language } from "../lang/main.js";

export const UserAppContext = createContext();
export function UserAppContextProvider(props) {
    const { sheetData } = useContext(SpreadSheetContext);
    const [ compile, setCompile ] = useState([...sheetData]);
    const [ runtime, setRuntime ] = useState(({}));
    const [ userApp, setUserApp ] = useState([[<></>]]);
    const [ message, setMessage ] = useState(<></>);
    const [ sent, setSent ] = useState(false);
    const lang = start_language();
    const interp = lang.init_interp();
    const imath = lang.init_math();
    useEffect(() => {
      if (message != <></>) {
        setSent(true);
      }
    }, [ message ]);

    const createRuntime = (data, deps) => {
      let build = deps.map((dep) => {
        return data.find((cell) => cell.ref === dep.ref);
      });
      return build;
    };

    const buildApp = (views, places) => {
      let realy = places.map((e) => e[2])
        .sort().filter((e2, p, arr) => {
          return p == 0 || e2 != arr[p - 1];
        })
      let fullw = realy.map((e) => {
        return (places.filter((e2) => {
            return e2[2] === e;
          }).map((e2) => e2[3])
          .reduce((a, b)=> a+b, 0)
        );
      }).reduce((m, e) => {
        return m < e ? e : m;
      }, 0);
      let customApp = realy.map((e) => {
        return (places.sort((a, b) => {
          return a[1] - b[1];
        }).filter((e2) => {
          return e2[2] === e;
        }).map((e2, idx) => {
          return (
            <VContainer key={`custom-user-app-${idx}`} w={e2[3]} mw={fullw}>
              {views[e2[0]]}
            </VContainer>
          );
        }));
      })
      let occupied = places.map((e) => e[0]);
      let rest = Object.keys(views).filter((e) => {
        return !occupied.includes(e);
      });
      let defaultApp = rest.map((e, idx) => {
        return ([<VContainer key={`default-user-app-${idx}`} w={1} mw={1}>
          {views[e]}
        </VContainer>]);
      });
      return [...customApp, ...defaultApp];
    };

    const createApp = (data) => {
      let pScope = data.filter((element) => {
        return element.cell.cls === "base";
      }).reduce((obj, element) => {
        let body = element.cell.cont;
        switch (element.cell.type) {
          case "String":
            return ({...obj, [element.ref]: body});
          case "Float":
            return ({...obj, [element.ref]: parseFloat(body)});
          case "Integer":
            return ({...obj, [element.ref]: parseInt(body)});
        }
      }, {});
      let detection; let body; let funcs = [];
      let views = ({}); let places = [];
      data.forEach((element) => {
        body = element.cell.cont.slice(1);
        switch (element.cell.cls) {
          case "math":
            pScope = {...pScope, [element.ref]: imath(body, pScope)};
            break;
          case "data":
            detection = interp(body);
            switch (detection.op) {
              case "zeros": case "ones":
                let n = detection.args[0].value;
                let c = ((detection.op === "zeros") ? 0 : 1);
                let sarr = new Array(n);
                for (let i = 0; i < n; ++i) { sarr[i] = c; }
                pScope = {...pScope, [element.ref]: sarr};
                break;
              case "rec":
                break;
              case "range":
                let ini = detection.args[0].value;
                let end = detection.args[1].value;
                let stp = detection.args[2].value; let rng = [];
                for (let i=ini; ((stp>0)? i<end : i>end); i+=stp) {
                  rng.push(i);
                }
                pScope = {...pScope, [element.ref]: rng};
                break;
              case "map":
                break;
            }
            break;
          case "ctrl":
            break;
          case "view":
            detection = interp(body);
            let view;
            switch (detection.op) {
              case "place":
                places = [...places, detection.args.map((e) => e.value)];
                break;
              case "button":
                break;
              case "text":
                views = {...views, [element.ref]: <VText
                  text={detection.args[0].value}
                  size={detection.args[1].value}
                />};
                break;
              case "display":
                views = {...views, [element.ref]: <VLabel
                  cell={detection.args[0].value}
                  size={detection.args[1].value}
                />};
                break;
              case "input":
                let preval = detection.args[1].value;
                views = ({...views, [element.ref]: <VInput
                  cell={element.ref}
                  placeholder={detection.args[0].value}
                  value={preval}
                />});
                pScope = {...pScope, [element.ref]: preval};
                break;
            }
            break;
          default:
            break;
        }
      });
      setRuntime(pScope);
      return buildApp(views, places); // was about to debug :')
    };

    const changeCell = (cell, value) => {
      const actualValues = [...compile];
        let notFound = true;
        let newValues = actualValues.map((element) => {
            if (element.ref === cell) {
                notFound = false;
                return value;
            }
            return element;
        });
        if (notFound) {
            newValues = [...actualValues, value];
        }
        setCompile(newValues);
    };

    useEffect(() => {
      try {
        let deps = lang.get_all_deps(compile);
        let views = createRuntime(compile, deps);
        setUserApp(createApp(views));
      } catch (e) {
        setUserApp([]);
        setMessage(
        <Notification
          title={"SyntaxError"}
          type={"error"}
          content={"La aplicación tiene un error en su implementación"}
          callback={setSent(false)}/>
        )
      }
    }, [ compile ]);

    return (
        <UserAppContext.Provider value={({
          runtime, 
          userApp,
          message,
          sent,
          changeCell,
          setRuntime,
        })}>
            {props.children}
        </UserAppContext.Provider>
    )
}