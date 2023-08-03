console.time('code');
class Queue {
    constructor() {
        this.queue = new Array();
        this.cursor = 0;
    }

    enqueue(e) {
        this.queue.push(e);
    }

    dequeue() {
        this.cursor = this.cursor + 1;
        return this.queue[this.cursor - 1];
    }

    isEmpty() {
        return this.queue.length === this.cursor ? true : false;
    }
}

function printBox(box) {
    console.log("===");
    for (let row of box) {
        console.log(row.join("\t"));
    }
}

let line = require("fs").readFileSync("./7576.input", "utf8");
//let line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().replace(/\r/gi, "").split("\n");

// init box
const [M, N] = input[0].split(" ").map(e => parseInt(e));
let box = [];
box.push(new Array(M + 2).fill(-1));
for (let a = 0; a < N; a++) {
    box.push([
        -1,
        ...input[a + 1].split(" ").map(e => parseInt(e)),
        -1
    ]);
}
box.push(new Array(M + 2).fill(-1));

(() => {
    // init, enqueue
    let q = new Queue();
    for (let a = 1; a < N + 1; a++) {
        for (let b = 1; b < M + 1; b++) {
            if (box[a][b] === 1) {
                // up
                if (box[a - 1][b] === 0) {
                    box[a - 1][b] = 2;
                    q.enqueue([a - 1, b, 2]);
                }
                // right
                if (box[a][b + 1] === 0) {
                    box[a][b + 1] = 2;
                    q.enqueue([a, b + 1, 2]);
                }
                // down
                if (box[a + 1][b] === 0) {
                    box[a + 1][b] = 2;
                    q.enqueue([a + 1, b, 2]);
                }
                // left
                if (box[a][b - 1] === 0) {
                    box[a][b - 1] = 2;
                    q.enqueue([a, b - 1, 2]);
                }
            }
        }
    }

    while (!q.isEmpty()) {
        const [a, b, n] = q.dequeue();

        if (box[a][b] > 0) {
            // up
            if (box[a - 1][b] === 0) {
                box[a - 1][b] = n + 1;
                q.enqueue([a - 1, b, n + 1]);
            }
            // right
            if (box[a][b + 1] === 0) {
                box[a][b + 1] = n + 1;
                q.enqueue([a, b + 1, n + 1]);
            }
            // down
            if (box[a + 1][b] === 0) {
                box[a + 1][b] = n + 1;
                q.enqueue([a + 1, b, n + 1]);
            }
            // left
            if (box[a][b - 1] === 0) {
                box[a][b - 1] = n + 1;
                q.enqueue([a, b - 1, n + 1]);
            }
        }
    }

    let hasZero = (() => {
        for (let a = 1; a < N + 1; a++) {
            if (box[a].includes(0)) {
                return true;
            }
        }
        return false;
    })();
    if (hasZero) {
        console.log(-1);
        return;
    }

    // get max
    let max = 1;
    for (let a=1; a<N+1; a++) {
        for (let b=1; b<M+1; b++) {
            if (box[a][b] > max) {
                max = box[a][b];
            }
        }
    }

    console.log(max - 1);
})();

console.timeEnd('code');