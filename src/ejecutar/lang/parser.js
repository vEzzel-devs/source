import { create, all, parse } from "mathjs";
import { argCheck } from "./typeModel";

export function init_interp() {
    let compiler = init_compiler();
    const interp = (body) => {
        const detection = parse(body);
        if (detection.type != "FunctionNode") {
            throw new Error(`Wrong Syntax: Content on view, ctrl and data cells must be function-like`);
        }
        let op = detection.fn.name;
        if (detection.args.length != argCheck[op].length) {
            throw new Error(`Wrong Arguments: The amount of arguments passed to the cell doesn't match its definition.`);
        }
        let args = detection.args.map((element, index) => {
            if (argCheck[op][index] === "compile") {
                try {
                    return ({key: "fun", value: compiler(element)});
                } catch (error) {
                    throw new Error(`Wrong Arguments: The argument's type doesn't match with the cell's definition.`);
                }
            } else if (element.type === "SymbolNode") {
                return ({key: "sym", value: element.name});
            } else if (element.type === "ConstantNode") {
                return ({key: "val", value: element.value});
            } else {
                throw new Error(`Wrong Arguments: The argument's type doesn't match with the cell's definition.`);
            }
        });
        return {op, args}
    }
    return interp;
}

function init_compiler() {
    const math = create(all);
    const compiler = math.compile;
    const banned = ["import", "createUnit", "evaluate", "parse", "simplify", "derivative"];
    const otherCell = Object.keys(argCheck);

    math.import({
        ...banned.reduce((object, key) => ({ ...object, [key]: 
            () => { throw new Error(`Wrong Identifier: Function "${key}" is disabled for security reasons.`) }
        }), {}),
        ...otherCell.reduce((object, key) => ({ ...object, [key]: 
            () => { throw new Error(`Wrong Identifier: Function "${key}" is only available on other cell types.`) }
        }), {}),
    }, { override: true });

    return compiler;
}

export function init_math() {
    let secure_eval = init_compiler();
    const math_interp = (body, scope) => {
        let run;
        try {
            run = secure_eval(body);
            return run.evaluate(scope);
        } catch (error) {
            throw new Error(`Wrong Syntax: Expression at Math cell failed to compile.`)
        }
    };

    return math_interp;
}

function rec_deps(p, deps) {
    if (p.type === "SymbolNode") {
        return [p.name];
    }
    let args = p.content?.args ? p.content.args : p.args;
    if (args && args.length > 0) {
        args.forEach((node) => {
            if (node.type === "SymbolNode") {
                if (! deps.includes(node.name)) {
                    deps = [...deps, node.name];
                }
            } else {
                deps = rec_deps(node, deps);
            }
        });
    }
    return deps;
}

export function get_dependences(body) {
    const detection = parse(body);
    let takeOut = [""];
    if (detection.type === "FunctionNode") {
        if (detection.fn.name == "func"
        || detection.fn.name == "set") {
            takeOut = ["", detection.args[0]?.name]
        } else if (detection.fn.name == "move") {
            takeOut = ["", detection.args[1]?.name]
        }
    }
    let deps = rec_deps(detection, [""]);
    return deps.filter((c) => !takeOut.includes(c));
}