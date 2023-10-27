// https://www.acmicpc.net/problem/2606
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `7
6
1 2
2 3
1 5
5 2
5 6
4 7`
).trim().split("\n");

const [lenC, lenN] = stdin.slice(0, 2).map(n=>Number(n));
const computers = new Array(lenC + 1).fill().map( e => ({visit: false, nodes: []}) );

for (let i=2; i<lenN+2; i++) {
    const [from, to] = stdin[i].split(" ").map(n=>Number(n));
    computers[from].nodes.push(to);
    computers[to].nodes.push(from);
}

function dfs(node) {
    computers[node].visit = true;
    for (let n of computers[node].nodes) {
        if (!computers[n].visit) dfs(n);
    }
}

dfs(1);
console.log(computers.filter(c=>c.visit).length - 1);