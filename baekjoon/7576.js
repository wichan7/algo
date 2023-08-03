let line = require("fs").readFileSync("./7576.input", "utf8");
//let line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().replace(/\r/gi, "").split("\n");

// init box
const [M, N] = input[0].split(" ").map( e => parseInt(e) );
let box = [];
box.push(new Array(M+2).fill(-1));
for (let a=0; a<N; a++) {
    box.push([
        -1,
        ...input[a + 1].split(" ").map( e=> parseInt(e) ),
        -1
    ]);
}
box.push(new Array(M+2).fill(-1));

(() => {
    // find cannot reaching
    for (let a = 1; a < N + 1; a++) {
        for (let b = 1; b < M + 1; b++) {
            if (box[a][b] === 0) {
                // if cannot reaching
                if (box[a - 1][b] === -1 &&
                    box[a][b + 1] === -1 &&
                    box[a + 1][b] === -1 &&
                    box[a][b - 1] === -1) {
                        console.log(-1);
                        return;
                }
            }
        }
    }

    // spread
    let flag = false;
    let count = 0;
    do {
        flag = false;
        const phase = count + 1;

        for (let a = 1; a < N + 1; a++) {
            for (let b = 1; b < M + 1; b++) {
                if (box[a][b] === phase) {
                    if (box[a - 1][b] === 0) {
                        box[a - 1][b] = phase + 1;
                        flag = true;
                    }
                    if (box[a][b + 1] === 0) {
                        box[a][b + 1] = phase + 1;
                        flag = true;
                    }
                    if (box[a + 1][b] === 0) {
                        box[a + 1][b] = phase + 1;
                        flag = true;
                    }
                    if (box[a][b - 1] === 0) {
                        box[a][b - 1] = phase + 1;
                        flag = true;
                    }
                }
            }
        }

        if (flag) {
            count += 1;
        }
    } while(flag);

    console.log(count);
    return;
})();