function solution(land) {
    const dp = new Array(land.length).fill().map( e=>new Array(4).fill(0) );
    dp[0] = [...land[0]];
    
    for (let i=1; i<dp.length; i++) {
        for (let j=0; j<dp[i].length; j++) {
            let max = -Infinity;
            for (let k=0; k<dp[i-1].length; k++) {
                if (j === k) continue;
                if (max < dp[i-1][k]) max = dp[i-1][k];
            }
            dp[i][j] = max + land[i][j];
        }
    }
    
    return dp.at(-1).reduce((a, c) => a < c ? c : a, -Infinity);
}