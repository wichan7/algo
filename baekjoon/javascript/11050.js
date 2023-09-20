// https://www.acmicpc.net/problem/11050
const stdin = (
  process.platform === "linux"
    ? require('fs').readFileSync("/dev/stdin").toString().trim()
    : `5 2`
).split("\n");
const [N, K] = stdin[0].split(" ").map( e => e / 1 );
const factorial = new Array(11).fill(0);
factorial[0] = 1;
for (let i=1; i<factorial.length; i++) {
    factorial[i] = factorial[i - 1] * i;
}
console.log( factorial[N] / (factorial[K] * factorial[N - K]) );