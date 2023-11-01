// https://www.acmicpc.net/problem/1449
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `3 1
3 2 1`
).trim().split("\n");
const [N, L] = stdin[0].split(" ").map(n => Number(n));
const holes = stdin[1].split(" ").map(n => Number(n)).sort((a, b) => a - b);

let count = 0;
for (let i=0; i<N;) {
    let j = i;
    for (; j<N; j++) {
        if (holes[j] - holes[i] > L - 1) break;
    }
    count += 1;
    i = j;
}

console.log(count);