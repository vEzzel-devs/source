export function parseCell(cell) {
    let result = ["", ""]
    for (const c of cell) {
        if ("0123456789".includes(c)) {
            result[1] += c;
        } else {
            result[0] += c;
        }
    }
    return result;
}