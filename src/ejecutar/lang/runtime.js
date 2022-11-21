import { get_dependences } from "./parser";

function checkRefs(refs, vals) {
  let valid = true;
  refs.forEach((ref) => {
    if (!vals.includes(ref)) {
      valid = false;
    }
  });
  return valid;
}

export function get_all_deps(data) {
  let every = data.map((element) => {
    let cell = element.cell;
    let ref = element.ref;
    if (cell.cls === "debug") {
      return {ref, deps:["Inaccesible"]};
    } else if (cell.cls === "base") {
      return {ref, deps:[]};
    }
    let body = cell.cont.slice(1);
    let deps = get_dependences(body);
    return {ref, deps};
  });
  let approved = 0;
  let valid = every.filter((cell) => {
    return cell.deps.length === 0;
  });
  while (approved != valid.length) {
    approved = valid.length;
    every.forEach((cell) => {
    if (valid.includes(cell)) { return; }
    if (checkRefs(cell.deps, valid.map(c => c.ref))) {
      valid = [...valid, cell];
    }
  });
  }
  return valid.map((c) => c.ref);
}