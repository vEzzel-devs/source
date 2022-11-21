import * as parser from "./parser";
import * as runtime from "./runtime";

export const start_language = () => {
    return {...parser, ...runtime};
}