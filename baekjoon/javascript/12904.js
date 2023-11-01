// https://www.acmicpc.net/problem/12904
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        AB
        ABB
`
).trim().split("\n").map(e => e.trim());

let [from, to] = stdin;
while (from.length < to.length) {
    if (to.at(-1) === "A") 
        to = to.slice(0, to.length - 1);
    else 
        to = [...to.slice(0, to.length - 1)].reverse().join("");
}

console.log(from === to ? 1 : 0);