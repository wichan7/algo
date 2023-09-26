// https://www.acmicpc.net/problem/1912
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
: `5
-1 -2 -3 -4 -5`
).trim().split("\n");

const arr = stdin[1].split(" ").map( e => Number(e) );
const dp = new Array(arr.length);
let max = arr[0];

dp[0] = arr[0];
for (let i=1; i<arr.length; i++) {
    if ( dp[i - 1] + arr[i] > 0 && dp[i - 1] > 0 ) {
        dp[i] = dp[i-1] + arr[i];
    } else {
        dp[i] = arr[i];
    }

    if (max < dp[i]) {
        max = dp[i];
    }
}

console.log(max);