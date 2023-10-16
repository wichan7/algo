// https://www.acmicpc.net/problem/2669
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        1 2 4 4
        2 3 5 7
        3 1 6 5
        7 3 8 6
`
).trim().replace(/\r/g, "").split("\n").map( e => e.trim() );
const map = new Array(100 + 1).fill().map( e => new Array(100 + 1).fill(0) );

for (let rect of stdin) {
    const [x1, y1, x2, y2] = rect.split(" ").map(n=>Number(n));

    for (let y=y1; y<y2; y++) {
        for (let x=x1; x<x2; x++) {
            map[y][x] = 1;
        }
    }
}

console.log(map.reduce((total, row) => total + row.reduce( (subTotal, cur) => subTotal + cur, 0), 0));