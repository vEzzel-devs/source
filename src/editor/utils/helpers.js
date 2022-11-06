import { baseChar, rBaseChar } from "./numbers";
import { parseCell } from "./strings";

export const keydownHelper = (shape, current, event) => {
    event = event || window.event;
    if (!current || event.shiftKey || !event.ctrlKey) { return undefined; }
    let move;
    switch (event.key) {
        case "ArrowLeft":
            event.preventDefault();
            move = [-1, 0];
            break;
        case "ArrowRight":
            event.preventDefault();
            move = [1, 0];
            break;
        case "ArrowUp":
            event.preventDefault();
            move = [0, -1];
            break;
        case "ArrowDown":
            event.preventDefault();
            move = [0, 1];
            break;
        default:
            return undefined;
    }
    let [col, row] = parseCell(current);
    col = rBaseChar(col) - 1;
    col = (col + move[0]) % shape[0];
    col = col < 0 ? shape[0] - 1 : col;
    row = parseInt(row) - 1;
    row = (row + move[1]) % shape[1];
    row = row < 0 ? shape[1] - 1 : row;
    return baseChar(col) + String(row+1);
};