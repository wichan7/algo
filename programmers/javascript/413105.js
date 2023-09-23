function solution(t) {
    for (let i=t.length-1; i>0; i--) {
        for (let j=0; j<t[i].length-1; j++) {            
            if (t[i][j] > t[i][j + 1]) {
                t[i-1][j] = t[i][j] + t[i-1][j];
            } else {
                t[i-1][j] = t[i][j + 1] + t[i-1][j];
            }
        }
    }
    
    return t[0][0]
}