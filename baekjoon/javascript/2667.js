// https://www.acmicpc.net/problem/2667
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `7
        0110100
        0110101
        1110101
        0000111
        0100000
        0111110
        0111000`
).trim().split("\n").map(e => e.trim());

const map = stdin.slice(1, stdin.length).map(e => e.split("").map(n => Number(n)));
const res = [];

for (let i=0; i<map.length; i++) {
    for (let j=0; j<map[0].length; j++) {
        if (map[i][j] === 1) {
            map[i][j] = 0;
            res.push(dfs(map, i, j));
        }
    }
}
res.sort((a, b) => a - b);
console.log(res.length);
console.log(res.join("\n"));

function dfs(map, y, x) {
    let count = 0;

    if (y > 0 && map[y - 1][x]) {
        map[y - 1][x] = 0;
        count += dfs(map, y - 1, x);
    }
    if (y + 1 < map.length && map[y + 1][x]) {
        map[y + 1][x] = 0;
        count += dfs(map, y + 1, x);
    }
    if (x > 0 && map[y][x - 1]) {
        map[y][x - 1] = 0;
        count += dfs(map, y, x - 1);
    }
    if (x + 1 < map[0].length && map[y][x + 1]) {
        map[y][x + 1] = 0;
        count += dfs(map, y, x + 1);
    }

    return count === 0 ? 1 : count + 1;
}