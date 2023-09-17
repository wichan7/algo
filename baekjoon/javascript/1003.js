let fs = require('fs');
let line = require("fs").readFileSync("./1003.input", "utf8");
//let line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().split("\n");

// init map
let map = Array.from({length: 41}, () => [0,0]);
map[0] = [1, 0];
map[1] = [0, 1];
for ( let a=2; a<map.length; a++ ) {
    map[a][0] = map[a-2][0] + map[a-1][0];
    map[a][1] = map[a-2][1] + map[a-1][1];
}

const c = parseInt(input[0]);
for ( let a=1; a<=c; a++ ) {
    let n = parseInt(input[a]);
    console.log(map[n][0] + " " + map[n][1]);
}