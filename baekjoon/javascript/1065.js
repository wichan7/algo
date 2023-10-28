// https://www.acmicpc.net/problem/1065
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `210`
).trim().split("\n").map(e => e.trim());
const N = Number(stdin[0]);

function solution(N) {
    if (N < 100) return N;

    let count = 0;
    for (let i=100; i<=N; i++) {
        const nums = (i + "").split("").map(n => Number(n));
        const d = nums[0] - nums[1];
        if (nums[2] + d === nums[1]) count += 1;
    }

    return count + 99;
}

console.log(solution(N));