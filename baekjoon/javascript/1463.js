// https://www.acmicpc.net/problem/1463
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `2`
).trim().split("\n");
let s = Number(stdin[0]);
let dp = new Array(s+1).fill(0);
dp[s] = 0;

for (let i=s-1; i>0; i--) {
    let a=Infinity, b=Infinity, c=Infinity;

    if (i * 3 <= s) a = dp[i * 3];
    if (i * 2 <= s) b = dp[i * 2];
    c = dp[i + 1];

    dp[i] = Math.min(a, b, c) + 1;
}
console.log(dp[1]);