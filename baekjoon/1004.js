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

class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

let line = require("fs").readFileSync("./1004.input", "utf8");
//let line = require("fs").readFileSync("/dev/stdin", "utf8");
let input = line.trim().replace(/\r/gi, "").split("\n");