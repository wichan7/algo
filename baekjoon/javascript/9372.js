// https://www.acmicpc.net/problem/9372
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        2
        3 3
        1 2
        2 3
        1 3
        5 4
        2 1
        2 3
        4 3
        4 5
`
).trim().split("\n").map(line => line.trim());

let idx = 1;
while (idx < stdin.length) {
    const [nations, airs] = stdin[idx].split(" ").map( e=>Number(e) );
    idx += airs + 1;
    console.log(nations - 1);
}