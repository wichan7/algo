// https://www.acmicpc.net/problem/11053
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