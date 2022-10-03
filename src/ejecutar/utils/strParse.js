export function strParse(str) {
    let parsing = str.split('"');
    let replacer = {};
    parsing.forEach((element, index) => {
        if (index % 2 === 1) {
            replacer = {...replacer, [`str${index}`]: element};
            parsing[index] = `str${index}`;
        }
    });
    const replaced = [...parsing];
    let parsed = replaced.join("");
    return ({parsed, replacer});
}