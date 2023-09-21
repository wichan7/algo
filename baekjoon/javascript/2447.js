// https://www.acmicpc.net/problem/2447
const stdin = (
    process.platform === "linux"
      ? require('fs').readFileSync("/dev/stdin").toString()
      : `81`
  ).trim().split("\n");

const N = Number(stdin[0]);
const stars = new Array(N).fill(0).map( e => new Array(N).fill(" ") );

function star(size, x, y) {
    if (size === 1) {
        stars[y][x] = "*";
        return;
    }

    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (i == 1 && j == 1) {
                continue;
            }
            star(size / 3, x + (i * size / 3), y + (j * size / 3));
        }
    }
}
star(N, 0, 0);

for(let row of stars) {
    console.log(row.join(""))
}