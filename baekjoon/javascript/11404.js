// https://www.acmicpc.net/problem/11404
// const inputs = require("fs").readFileSync("./dev/stdin", "utf-8").trim().replace(/\r/g, "").split("\n");
const inputs = require("fs").readFileSync("./11404.input", "utf-8").trim().replace(/\r/g, "").split("\n");
const N = Number(inputs[0]);
const vertices = inputs.slice(2).map( el => el.split(" ").map( e => Number(e) ) );
const map = new Array(N).fill(0).map( el => new Array(N).fill(Infinity) );

// init
// add self vertax
for (let i=1; i<=N; i++) {
    vertices.push([i, i, 0]);
}
for (let [i, j, cost] of vertices) {
    i = i - 1;
    j = j - 1;
    if (cost < map[i][j]) map[i][j] = cost;
}

// Floyd-Warshall
for (let k=0; k<map.length; k++) {
    for (let i=0; i<map.length; i++) {
        for (let j=0; j<map.length; j++) {
            if (map[i][k] + map[k][j] < map[i][j]) {
                map[i][j] = map[i][k] + map[k][j];
            }
        }
    }
}

// print
for (let row of map) {
    console.log( row.map( e => e === Infinity ? 0 : e ).join(" ") )
}