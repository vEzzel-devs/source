import * as parser from "./parser";
import * as runtime from "./runtime";
import * as typeModel from "./typeModel";

export const start_language = () => {
    return ({
        ...parser,
        ...runtime,
        ...typeModel,
    });
}