// https://www.acmicpc.net/problem/14503
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        6 6
        2 1 3
        1 1 1 1 1 1
        1 0 0 0 0 1
        1 0 0 0 0 1
        0 0 1 0 1 1
        1 0 0 0 0 0
        1 1 1 1 1 1
`
).trim().split("\n").map(line => line.trim());

// init
const [H, W] = stdin.splice(0, 1)[0].split(" ").map(e => Number(e));
let [y, x, d] = stdin.splice(0, 1)[0].split(" ").map(e => Number(e));
switch (d) {
    case 1:
        d = 3;
        break;
    case 3:
        d = 1;
        break;
}
const map = stdin.map(line => line.split(" ").map(e => Number(e)));
const dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];

// simulation
function solution() {
    let count = 0;
    while (true) {
        // 현재 칸 청소
        if (!map[y][x]) {
            count += 1;
            map[y][x] = 2;
        }

        // 주변이 청소되지 않은 경우
        if (map[y - 1][x] === 0 || map[y + 1][x] === 0 || map[y][x - 1] === 0 || map[y][x + 1] === 0) {
            while (true) {
                // 회전
                if (d === 3) d = 0;
                else d = d + 1;
                if (map[y + dir[d][0]][x + dir[d][1]] === 0) break;
            }
            // 전진
            y = y + dir[d][0];
            x = x + dir[d][1];
        }
        // 주변이 청소된 경우
        else {
            // 뒤가 벽이면 최종 리턴
            if (map[y - dir[d][0]][x - dir[d][1]] === 1) {
                return count;
            } else {
                y = y - dir[d][0];
                x = x - dir[d][1];
            }
        }
    }
};

console.log(solution());