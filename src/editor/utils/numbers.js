export function baseChar(int) {
    let counter = int;
    let base = 'A'.charCodeAt(0);
    let len = 'Z'.charCodeAt(0) - base + 1;
    let result = "";
    while(counter >= 0) {
        result = String.fromCharCode(counter % len + base) + result;
        counter = Math.floor(counter / len) - 1;
    }
    return result;
}

export function rBaseChar(str) {
    let acc = 0;
    let min = 'A'.charCodeAt(0);
    let base = 'Z'.charCodeAt(0) - min + 1;
    let chars = Array.from(str).reverse();
    chars.forEach((c, idx) => {
        acc += (c.charCodeAt(0) - min + 1) * Math.pow(base, idx);
    });
    return acc;
}