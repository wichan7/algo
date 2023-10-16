// https://www.acmicpc.net/problem/2668
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        7
        3
        1
        1
        5
        5
        4
        6
`
).trim().replace(/\r/g, "").split("\n").map( e => e.trim() );
const arr = stdin.map( n => Number(n) );
const used = new Array(arr.length).fill(false);
arr[0] = null;
used[0] = null;

for (let start=1; start<arr.length; start++) {
    if (used[start]) continue;
    
    let temp = [start];
    let next = arr[start];

    while (!temp.includes(next)) {
        if (used[next]) break;
        temp.push(next);
        next = arr[next];
    }
    if (arr[temp.at(-1)] === start) {
        for (let n of temp) {
            used[n] = true;
        }
    }
}

const answer = [];
for (let i=1; i<used.length; i++) {
    if (used[i]) answer.push(i);
}

console.log(answer.length);
console.log(answer.join("\n"));