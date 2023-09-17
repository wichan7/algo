/*
2 // 테스트 케이스 개수
-5 1 12 1 // 점 x1, y1 점x2, y2
7 // 행성계 개수 (7개)
1 1 8 // 행성 중심좌표, 반지름 a, b, r
-3 -1 1 // 동일
2 2 2
5 5 1
-4 5 1
12 1 1
12 1 2 // 7개까지
-5 1 5 1 // 점 x1 y1, 점 x2 y2
1 // 행성계 개수 (1개)
0 0 2 // 1개 끝
*/

/**
 * TODO 
 * r^2 > (x-a)^2 + (y-b)^2 이면 탈출카운트 += 1
 */

class Universe {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function isOnUniverse(point, universe) {
    const p = point;
    const u = universe;

    if ( Math.pow(p.x - u.x, 2) + Math.pow(p.y - u.y, 2) < Math.pow(u.r, 2) ) {
        return true;
    }

    return false;
}

let line = require("fs").readFileSync("./1004.input", "utf8");
//let line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().replace(/\r/gi, "").split("\n");

// define testcase amount
const testCase = parseInt(input[0]);
let cursor = 0;
for (let a=0; a<testCase; a++) {
    // define two points
    cursor += 1;
    const [x1, y1, x2, y2] = input[cursor].split(" ").map( e => parseInt(e) );
    const start = new Point(x1, y1);
    const dest = new Point(x2, y2);

    // define count of universes
    cursor += 1;
    const [universesCnt] = input[cursor].split(" ").map( e => parseInt(e) );
    
    // push universe in universes
    let universes = [];
    for (let b=0; b<universesCnt; b++) {
        cursor += 1;
        const [x, y, r] = input[cursor].split(" ").map( e => parseInt(e) );
        universes.push(new Universe(x, y, r));
    }

    let resultCount = 0;
    for (let universe of universes) {
        if ( isOnUniverse(start, universe) ^ isOnUniverse(dest, universe) ) {
            resultCount += 1;
        }
    }
    
    console.log(resultCount);
}