// https://www.acmicpc.net/problem/11729
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `10`
).trim().replace(/\r/g, "").split("\n").map( e => e.trim() );

function hanoi(n, start, dest, other) {
    if (n === 0) return;
    hanoi(n - 1, start, other, dest);
    console.log(start + " " + dest);
    hanoi(n - 1, other, dest, start);
}

console.log(Math.pow(2, stdin[0]) - 1);
hanoi(Number(stdin[0]), 1, 3, 2);