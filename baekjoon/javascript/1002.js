// https://www.acmicpc.net/problem/1002
let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let input = fs.readFileSync('1002.input').toString().replace(/\r/gi, "").split("\n");

// count of lines
const c = input[0];
let rounds = [];

for (let a = 1; a <= c; a++) {
    rounds.push(input[a]);
}

for (let round of rounds) {
    const [ax, ay, ar, bx, by, br] = round.split(" ").map(e => parseInt(e));

    // distance of between a and b
    const d = Math.sqrt(Math.pow(ay - by, 2) + Math.pow(ax - bx, 2));

    // Infinity
    if (d === 0 && ar === br) {
        console.log( -1 );
    }
    // Two
    else if (Math.abs(ar - br) < d && ar + br > d) {
        console.log( 2 ); 
    }
    // One
    else if (d === ar + br || Math.abs(ar - br) === d) {
        console.log( 1 );
    }
    // Zero
    else {
        console.log( 0 );
    }
}