// https://www.acmicpc.net/problem/11053
const stdin = (
    process.platform === "linux"
      ? require('fs').readFileSync("/dev/stdin").toString()
      : `_
      10 20 10 30 20 50`).trim().split("\n").map(e => e.trim());
const arr = stdin[1].split(" ").map(n => Number(n));
const dp = new Array(arr.length).fill(0);
dp[0] = 1;

for (let i=1; i<arr.length; i++) {
    for (let k=0; k<i; k++) {
        if (arr[i] > arr[k] && dp[i] < dp[k]) dp[i] = dp[k];
    }
    dp[i] += 1;
}
console.log(Math.max(...dp));

/* Brute-force 재귀 O(n^2)풀이
const stdin = (
    process.platform === "linux"
      ? require('fs').readFileSync("/dev/stdin").toString()
      : `_
        5 4 3 2 1 5 4 3 2 1 5 4 3 2 1 5 4 3 2 1 5`).trim().split("\n").map(e => e.trim());
const arr = stdin[1].split(" ").map(n => Number(n));
let max = -Infinity;

function solution(stack, idx) {
    if (idx >= arr.length) {
        if (stack.length > max) max = stack.length;
        return;
    }

    const now = arr[idx];
    if (now > stack.at(-1)) solution([...stack, now], idx + 1);
    else {
        solution([...stack], idx + 1);
        for (let i=stack.length-1; i>=0; i--) {
            if (now <= stack.at(-1)) stack = stack.slice(0, stack.length-1);
            else break;
        }
        solution([...stack, now], idx + 1);
    }
}

solution([], 0);
console.log(max);
*/