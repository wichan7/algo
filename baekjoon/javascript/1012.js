// https://www.acmicpc.net/problem/1012
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        2
        10 8 17
        0 0
        1 0
        1 1
        4 2
        4 3
        4 5
        2 4
        3 4
        7 4
        8 4
        9 4
        7 5
        8 5
        9 5
        7 6
        8 6
        9 6
        10 10 1
        5 5
`
).trim().replace(/\r/g, "").split("\n").map( e => e.trim() );

class Queue {
    constructor() {
        this.q = [];
    }
    enq(e) {
        this.q.push(e);
    }
    deq() {
        return this.q.shift();
    }
    isEmpty() {
        return this.q.length === 0 ? true : false;
    }
}

const T = Number(stdin.splice(0, 1)[0]);
for (let t=0; t<T; t++) {
    // init testcase
    const [M, N, K] = stdin.splice(0, 1)[0].split(" ").map( e => Number(e) );
    const map = new Array(N).fill(null).map( e => new Array(M).fill(0) );
    for (let k=0; k<K; k++) {
        const [cx, cy] = stdin.splice(0, 1)[0].split(" ").map( e => Number(e) );
        map[cy][cx] = 1;
    }
    
    let count = 0;
    // find
    for (let i=0; i<map.length; i++) {
        for (let j=0; j<map[0].length; j++) {
            if (map[i][j] !== 1) {
                continue;
            }
            count = count + 1;
            let queue = new Queue();
            queue.enq([i, j]);

            while (!queue.isEmpty()) {
                [y, x] = queue.deq();
                // up
                if (y !== 0 && map[y - 1][x]) {
                    queue.enq([y - 1, x]);
                    map[y - 1][x] = 0;
                }
                // down
                if (y + 1 < map.length && map[y + 1][x]) {
                    queue.enq([y + 1, x]);
                    map[y + 1][x] = 0;
                }
                // left
                if (x !== 0 && map[y][x - 1]) {
                    queue.enq([y, x - 1]);
                    map[y][x - 1] = 0;
                }
                // right
                if (x + 1< map[0].length && map[y][x + 1]) {
                    queue.enq([y, x + 1]);
                    map[y][x + 1] = 0;
                }
            }
        }
    }

    console.log(count)
}