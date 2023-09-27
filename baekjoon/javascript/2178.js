// https://www.acmicpc.net/problem/2178

const inputs = require("fs").readFileSync("./dev/stdin", "utf-8").replace(/\r/g, "").split("\n");
const [N, M] = inputs[0].split(" ").map(n => parseInt(n));

function solution() {
    // init map
    let map = new Array(N);
    for (let i = 1; i < inputs.length; i++) {
        map[i - 1] = inputs[i].split("").map(n => parseInt(n));
    }

    const q = new Queue();
    q.enq([0, 0, 1]);

    while (!q.isEmpty()) {
        const [y, x, v] = q.deq();
        
        if (y === N - 1 && x === M - 1) {
            return v;
        }

        if (y !== 0 && map[y - 1][x] === 1) {
            q.enq([y - 1, x, v + 1]);
            map[y - 1][x] = v;
        }
        if (y < map.length - 1 && map[y + 1][x] === 1) {
            q.enq([y + 1, x, v + 1]);
            map[y + 1][x] = v;
        }
        if (x !== 0 && map[y][x - 1] === 1) {
            q.enq([y, x - 1, v + 1]);
            map[y][x - 1] = v;
        }
        if (x < map[0].length - 1 && map[y][x + 1] === 1) {
            q.enq([y, x + 1, v + 1]);
            map[y][x + 1] = v;
        }
    }
}

class Queue {
    constructor() {
        this.q = []
    }
    enq(e) {
        this.q.push(e)
    }
    deq() {
        return this.q.shift()
    }
    isEmpty() {
        return this.q.length === 0 ? true : false
    }
}

console.log(solution())