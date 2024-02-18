// https://www.acmicpc.net/problem/2660
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        5
        1 2
        2 3
        3 4
        4 5
        2 4
        5 3
        -1 -1
        `
).trim().split("\n").map((s) => s.trim());
const PERSONS = parseInt(stdin[0]);
const map = new Array(PERSONS + 1).fill().map((_) => new Array(PERSONS + 1).fill(PERSONS));

for (let [from ,to] of stdin.slice(1, stdin.length - 1).map((row) => row.split(" ").map((s => parseInt(s))))) {
    map[from][to] = 1;
    map[to][from] = 1;
}

for (let i=1; i<=PERSONS; i++) {
    map[i][i] = 0;
}

for (let k=1; k<=PERSONS; k++) {
    for (let i=1; i<=PERSONS; i++) {
        for(let j=1; j<=PERSONS; j++) {
            if (map[i][k] + map[k][j] < map[i][j]) {
                map[i][j] = map[i][k] + map[k][j];
            }
        }
    }
}

let score, n = 0, candidates = [];
for (let i=1; i<=PERSONS; i++) {
    for (let j=1; j<=PERSONS; j++) {
        if (map[j].slice(1).every((n) => n <= i)) {
            score = i;
            n += 1;
            candidates.push(j);
        }
    }
    if (n > 0) break;
}

console.log([score, n].join(" "));
console.log(candidates.join(" "));