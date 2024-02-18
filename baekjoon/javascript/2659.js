// https://www.acmicpc.net/problem/2659
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `9 9 9 9`
).trim().split("\n");

function getClockNumber(n) {
    let min = n;

    for (j=0; j<4; j++) {
        const cur = parseInt((n + "" + n).slice(j, j+4))
        if (cur < min) min = cur;
    }

    return min;
}

const input = parseInt(stdin[0].split(" ").join(""));
const target = getClockNumber(input);

const numbers = [];

for (let i=1111; i<=9999; i++) {
    if ((i + "").includes("0")) continue;

    if (i === getClockNumber(i)) numbers.push(i);
}

console.log(numbers.indexOf(target) + 1)
