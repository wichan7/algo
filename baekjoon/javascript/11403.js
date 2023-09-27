// https://www.acmicpc.net/problem/11403
const fs = require("fs");
const inputs = fs.readFileSync("./11403.input", "utf-8").split("\n");
// const inputs = fs.readFileSync("./dev/stdin", "utf-8").split("\n");

const N = parseInt(inputs[0]);
const adjMatrix = [];
for (let i=1; i<=N; i++) {
    adjMatrix.push(inputs[i].split(" ").map( s => parseInt(s) === 0 ? 0 : parseInt(s) ));
}

let resMatrix = JSON.parse(JSON.stringify(adjMatrix));
for (let k=0; k<resMatrix.length; k++) {
    for (let i=0; i<resMatrix.length; i++) {
        for (let j=0; j<resMatrix.length; j++) {
            if (resMatrix[i][k] == 1 && resMatrix[k][j] > resMatrix[i][j] == 1) {
                resMatrix[i][j] = 1;
            }
        }
    }
}

for (let i=0; i<resMatrix.length; i++) {
    console.log(resMatrix[i].join(" "))
}