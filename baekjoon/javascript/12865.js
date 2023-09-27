// https://www.acmicpc.net/problem/12865
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        40 25
        2 4
        1 3
        3 5
        4 8
        2 1
        2 4
        1 3
        3 5
        4 8
        2 1
        2 4
        1 3
        3 5
        4 8
        2 1
        2 4
        1 3
        3 5
        4 8
        2 1
        2 4
        1 3
        3 5
        4 8
        2 1
        2 4
        1 3
        3 5
        4 8
        2 1
        2 4
        1 3
        3 5
        4 8
        2 1
        2 4
        1 3
        3 5
        4 8
        2 1
`
).trim().split("\n").map( e => e.trim() );

// init
const [N, K] = stdin[0].split(" ");
const items = stdin.slice(1, N + 1).map( e => e.split(" ").map(el => Number(el)) );
let max = 0;
comb(0, 0, 0);
console.log(max);

function comb(idx, wsum, vsum) {
    let flag = true;
    for (let i=idx; i<items.length; i++) {
        let [W, V] = items[i];
        if (wsum + W <= K) {
            flag = false;
            comb(i + 1, wsum + W, vsum + V);
        }
    }

    if (flag) {
        if (max < vsum) {
            max = vsum;
        }
        return;
    }
}