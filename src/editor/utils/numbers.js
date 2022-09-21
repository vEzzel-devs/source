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