class Queue {
    constructor() {
        this.q = [];
    }

    isEmpty() {
        return this.q.length === 0 ? true : false;
    }

    enqueue(e) {
        this.q.push(e);
    }

    dequeue() {
        return this.q.shift();
    }
}

function printMap(map) {
    console.log("=====");
    for (let row of map) {
        console.log(row.join(""));
    }
}

function solution(board) {
    // define Height, Width, 테두리를 벽으로 감싸기 때문에 +2
    const H = board.length + 2;
    const W = board[0].length + 2;
    // find Robot & Goal
    let rx = 0;
    let ry = 0;
    for (let y=0; y<board.length; y++) {
        const x = board[y].indexOf("R");
        if (x > -1) {
            rx = x+1;
            ry = y+1;
            break;
        }
    }
    let gx = 0;
    let gy = 0;
    for (let y=0; y<board.length; y++) {
        const x = board[y].indexOf("G");
        if (x > -1) {
            gx = x+1;
            gy = y+1;
            break;
        }
    }
    // init Map
    let map = [];
    map.push(new Array(W).fill("D"));
    for (let row of board) {
        map.push(["D", ...row.split(""), "D"]);
    }
    map.push(new Array(W).fill("D"));
    map[ry][rx] = 0;
    map[gy][gx] = ".";
    // init queue
    let q = new Queue();
    q.enqueue([rx, ry, 0]);
    // find
    while (!q.isEmpty()) {
        printMap(map);
        let [x, y, phase] = q.dequeue();
        map[y][x] = phase;

        // up
        for (let u=y+1; ; u++) {
            if (map[u][x] === "D") {
                if (map[u-1][x] === ".") {
                    if (x === gx && u-1 === gy) {
                        return phase + 1;
                    }
                    q.enqueue([x, u-1, phase + 1]);
                }
                break;
            }
        }
        // down
        for (let d=y-1; ; d--) {
            if (map[d][x] === "D") {
                if (map[d+1][x] === ".") {
                    if (x === gx && d+1 === gy) {
                        return phase + 1;
                    }
                    q.enqueue([x, d+1, phase + 1]);
                }
                break;
            }
        }

        // left
        for (let l=x-1; ; l--) {
            if (map[y][l] === "D") {
                if (map[y][l+1] === ".") {
                    if (l+1 === gx && y === gy) {
                        return phase + 1;
                    }
                    q.enqueue([l+1, y, phase + 1]);
                }
                break;
            }
        }
        // right
        for (let r=x+1; ; r++) {
            if (map[y][r] === "D") {
                if (map[y][r-1] === ".") {
                    if (r-1 === gx && y === gy) {
                        return phase + 1;
                    }
                    q.enqueue([r-1, y, phase + 1]);
                }
                break;
            }
        }
    }

    return -1;
}