// https://www.acmicpc.net/problem/14502
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        7 7
        2 0 0 0 1 1 0
        0 0 1 0 1 2 0
        0 1 1 0 1 0 0
        0 1 0 0 0 0 0
        0 0 0 0 0 1 1
        0 1 0 0 0 0 0
        0 1 0 0 0 0 0
`
).trim().split("\n").map(line => line.trim());

const [H, W] = stdin[0].split(" ").map( e=>Number(e) );
const map = new Array(H).fill(0).map( (_, i) => stdin[i + 1].split(" ").map(v => Number(v)) );
let max = 0;
for (let i=0; i<H*W; i++) {
    for (let j=i+1; j<H*W; j++) {
        for (let k=j+1; k<H*W; k++) {
            if (i === j || j === k || i === k) continue;
            const [iy, ix] = [Math.floor(i/W), i%W];
            const [jy, jx] = [Math.floor(j/W), j%W];
            const [ky, kx] = [Math.floor(k/W), k%W];
            if (map[iy][ix] !== 0 || map[jy][jx] !== 0 || map[ky][kx] !== 0) continue;

            const copyMap = JSON.parse(JSON.stringify(map));
            copyMap[iy][ix] = 1;
            copyMap[jy][jx] = 1;
            copyMap[ky][kx] = 1;

            for (let y=0; y<copyMap.length; y++) {
                for (let x=0; x<copyMap[0].length; x++) {
                    if (copyMap[y][x] === 2) {
                        infection(copyMap, y, x);
                    }
                }
            }

            let zero = countZero(copyMap);
            if (max < zero) {
                max = zero;
            }
        }
    }
}
console.log(max);


function countZero(map) {
    let count = 0;

    for (let i=0; i<map.length; i++) {
        for (let j=0; j<map[0].length; j++) {
            if (map[i][j] === 0) count += 1;
        }
    }

    return count;
}

function infection(map, y, x) {
    map[y][x] = 2;

    if (y !== 0 && map[y - 1][x] === 0) {
        infection(map, y - 1, x);
    }
    if (y + 1 !== map.length && map[y + 1][x] === 0) {
        infection(map, y + 1, x);
    }
    if (x !== 0 && map[y][x - 1] === 0) {
        infection(map, y, x - 1);
    }
    if (x + 1 !== map[0].length && map[y][x + 1] === 0) {
        infection(map, y, x + 1);
    }
}