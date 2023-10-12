// https://www.acmicpc.net/problem/1138
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `4
        2 1 1 0`
).trim().split("\n").map( e => e.trim() );

const N = Number(stdin[0]);
const memories = stdin[1].split(" ").map(n=>Number(n));
const result = new Array(N).fill(0);

for (let i=0; i<memories.length; i++) {
    let count = 0;
    for (let j=0; j<result.length; j++) {
        if (result[j] === 0) count += 1;
        if (count === memories[i] + 1) {
            result[j] = i + 1;
            break;
        }
    }
}

console.log(result.join(" "));