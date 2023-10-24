// https://www.acmicpc.net/problem/2839
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `9`
).trim().split("\n").map( e => e.trim() );

let n = Number(stdin[0]);
let c = 0;
while (n % 5 !== 0 && n > 2) {
    n -= 3;
    c += 1;
}
if (n % 5 === 0) {
    c += n / 5;
    n = 0;
}

console.log(n === 0 ? c : -1);