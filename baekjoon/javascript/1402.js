// https://www.acmicpc.net/problem/1402
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `1
6 5`
).trim().split("\n");

console.log("yes\n".repeat(Number(stdin[0])));