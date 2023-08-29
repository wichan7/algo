function solution(n) {
    let arr = new Array(n).fill(0).map( e => new Array(n).fill(0) );
    arr[0][0] = 1;
    let direction = "r";
    let x = 0;
    let y = 0;
    
    for (let a=1;a<n*n; a++) {
        if (direction === "r") {
            if (x+1 === n || arr[y][x+1] !== 0) {
                y = y + 1;
                direction = "d";
            } else {
                x = x + 1;
            }
        } else if (direction === "d") {
            if (y+1 === n || arr[y+1][x] !== 0) {
                x = x - 1;
                direction = "l";
            } else {
                y = y + 1;
            }
        } else if (direction === "l") {
            if (x-1 < 0 || arr[y][x-1] !== 0) {
                y = y - 1;
                direction = "u";
            } else {
                x = x - 1;
            }
        } else if (direction === "u") {
            if (y-1 < 0 || arr[y-1][x] !== 0) {
                x = x + 1;
                direction = "r";
            } else {
                y = y - 1;
            }
        }
        
        arr[y][x] = a + 1;
    }
    
    return arr;
}