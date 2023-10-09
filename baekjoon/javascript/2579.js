// https://www.acmicpc.net/problem/2579
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `6
10
20
15
25
10
20`
).trim().split("\n");

const stairs = stdin.slice(1, stdin.length).map(e => Number(e));
const dp = [stairs[0], stairs[0] + stairs[1], Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2])];
for (let i = 3; i < stairs.length; i++) {
    dp[i] = Math.max(dp[i - 2], dp[i - 3] + stairs[i - 1]) + stairs[i];
}
console.log(dp[Number(stdin[0]) - 1]);