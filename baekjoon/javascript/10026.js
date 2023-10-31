// https://www.acmicpc.net/submit/10026
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        5
        RRRBB
        GGBBB
        BBBRR
        BBRRR
        RRRRR
        `
).trim().split("\n").map(row => row.trim());

function dfs(map, y, x) {
    const c = map[y][x];
    map[y][x] = "_";

    // u
    if (y > 0 && map[y - 1][x] === c) dfs(map, y-1, x);
    // d
    if (y + 1 < map.length && map[y + 1][x] === c) dfs(map, y+1, x);
    // l
    if (x > 0 && map[y][x - 1] === c) dfs(map, y, x-1);
    // r
    if (x + 1 < map[0].length && map[y][x + 1] === c) dfs(map, y, x+1);
}

const map = stdin.slice(1, stdin.length).map(row => row.split(""));
const map_disabled = map.map(row => row.map(e => e === "G" ? "R" : e));
let count_normal = 0;
let count_disabled = 0;

for (let i=0; i<map.length; i++) {
    for (let j=0; j<map[0].length; j++) {
        if (map[i][j] !== "_") {
            dfs(map, i, j);
            count_normal += 1;
        }
        if (map_disabled[i][j] !== "_") {
            dfs(map_disabled, i, j);
            count_disabled += 1;
        }
    }
}

console.log(`${count_normal} ${count_disabled}`);