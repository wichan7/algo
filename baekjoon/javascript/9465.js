// https://www.acmicpc.net/problem/9465
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `1
        1
        50
        30
        `).trim().split("\n").map(line => line.trim());
const T = Number(stdin.splice(0, 1));

for (let t=0; t<T; t++) {
    const N = Number(stdin.splice(0, 1));
    const map = stdin.splice(0, 2).map(row => row.split(" ").map(n => Number(n)));
    const dp = new Array(2).fill().map(row => new Array(N).fill(0));
    if (N === 1) {
        console.log(Math.max(map[0][0], map[1][0]));
        continue;
    }

    dp[0][0] = map[0][0];
    dp[1][0] = map[1][0];
    dp[0][1] = map[0][1] + dp[1][0];
    dp[1][1] = map[1][1] + dp[0][0];

    for (let i=2; i<map[0].length; i++) {
        dp[0][i] = Math.max(dp[1][i-1], Math.max(dp[0][i-2], dp[1][i-2])) + map[0][i];
        dp[1][i] = Math.max(dp[0][i-1], Math.max(dp[0][i-2], dp[1][i-2])) + map[1][i];
    }
    console.log(Math.max(...dp[0], ...dp[1]));
}