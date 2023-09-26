// https://www.acmicpc.net/problem/9205
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `1
4
2000 0
1000 0
0 0
0 1000
0 2000
1000 2000
`
).trim().split("\n").map(line => line.trim());

class Queue {
    constructor() {
        this.q = [];
    }

    isEmpty() {
        return this.q.length === 0 ? true : false;
    }

    enq(e) {
        this.q.push(e);
    }

    deq() {
        return this.q.shift();
    }
}

const T = Number( stdin.splice(0, 1)[0] );
for (let t=0; t<T; t++) {
    // init
    const PN = Number(stdin[0]);
    const [sx, sy] = stdin[1].split(" ").map( e => Number(e) );
    const [fx, fy] = stdin[PN + 2].split(" ").map( e => Number(e) );
    const nodes = [[sx, sy]];
    for (let p=0; p<PN; p++) {
        nodes.push(stdin[2 + p].split(" ").map( e => Number(e) ));
    }
    nodes.push([fx, fy]);
    const visited = new Array(nodes.length).fill(false);
    const q = new Queue();
    q.enq(0);
    visited[0] = true;
    while (!q.isEmpty()) {
        const [x, y] = nodes[q.deq()];
        if (x === fx && y === fy) break;

        for (let i=0; i<nodes.length; i++) {
            const [dx, dy] = nodes[i];
            if ( visited[i] === true ) continue;
            if ( Math.abs(Math.max(x, dx) - Math.min(x, dx)) + Math.abs(Math.max(y, dy) - Math.min(y, dy)) > 1000 ) continue;

            q.enq(i);
            visited[i] = true;
        }
    }

    visited.at(-1) ? console.log("happy") : console.log("sad");
    stdin.splice(0, PN + 3);
}