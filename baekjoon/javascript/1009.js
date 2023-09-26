// https://www.acmicpc.net/problem/1009
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        5
        15 1
        1 6
        3 7
        6 2
        7 100
        9 635
`
).trim().split("\n").map( e => e.trim() );

const N = Number(stdin[0]);
for (let i=1; i<=N; i++) {
    let [n, p] = stdin[i].split(" ").map( e => Number(e) );
    n = n % 10;
    let t = n;
    for (let j=1; j<p; j++) {
        t = (t * n) % 10;
    }

    console.log(t === 0 ? 10 : t);
}