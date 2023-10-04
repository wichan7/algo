// https://www.acmicpc.net/problem/12865
// KnapSack algorithm
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        5 14
        1 5
        2 3
        3 6
        4 7
        5 8
`
).trim().split("\n").map(e => e.trim());

// init
const [N, K] = stdin[0].split(" ").map(e => Number(e));
const items = stdin.slice(1, N + 1).map(e => e.split(" ").map(el => Number(el)));
const memo = new Array(K + 1).fill(0);

// knapsack
for (let j = 0; j < items.length; j++) {
    const [w, v] = items[j];
    for (let i = K; i >= 0; i--) {
        if (i + w <= K && memo[i + w] < memo[i] + v) {
            memo[i + w] = memo[i] + v;
        }
    }
}

let max = -Infinity;
for (let i=0; i<memo.length; i++)
    if (max < memo[i]) max = memo[i];

console.log(max);

// brute force
// const stdin = (
//     process.platform === "linux"
//         ? require('fs').readFileSync("/dev/stdin").toString()
//         : `
//         4 7
//         6 13
//         4 8
//         3 6
//         5 12
// `
// ).trim().split("\n").map( e => e.trim() );

// // init
// const [N, K] = stdin[0].split(" ");
// const items = stdin.slice(1, N + 1).map( e => e.split(" ").map(el => Number(el)) );
// let max = 0;
// comb(0, 0, 0);
// console.log(max);

// function comb(idx, wsum, vsum) {
//     let flag = true;
//     for (let i=idx; i<items.length; i++) {
//         let [W, V] = items[i];
//         if (wsum + W <= K) {
//             flag = false;
//             comb(i + 1, wsum + W, vsum + V);
//         }
//     }

//     if (flag) {
//         if (max < vsum) {
//             max = vsum;
//         }
//         return;
//     }
// }