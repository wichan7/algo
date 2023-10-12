// https://www.acmicpc.net/submit/1058
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `5
        NYNNN
        YNYNN
        NYNYN
        NNYNY
        NNNYN`
).trim().replace(/\r/g, "").split("\n");
const relation = stdin.slice(1, stdin.length).map(el => el.trim().split(""));
let max = -Infinity;

for (let i=0; i<relation.length; i++) {
    let count = 0;
    for (let j=0; j<relation.length; j++) {
        if (i===j) continue;

        if (relation[i][j] === "Y") count += 1;
        else {
            for (let k=0; k<relation.length; k++) {
                if (relation[i][k] === "Y" && relation[k][j] === "Y") {
                    count += 1;
                    break;
                }
            }
        }
    }

    if (max < count) max = count;
}

console.log(max);