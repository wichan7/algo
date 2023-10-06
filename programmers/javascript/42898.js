function solution(w, h, puddles) {
    const map = new Array(h).fill("").map(e=>new Array(w).fill(1));
    puddles.forEach(e => map[e[1] - 1][e[0] - 1] = 0);
    
    for (let i=0; i<map[0].length; i++) {
        if (map[0][i] !== 0) continue;
        for (let j=i+1; j<map[0].length; j++) {
            map[0][j] = 0;
        }
    }
    for (let i=0; i<map.length; i++) {
        if (map[i][0] !== 0) continue;
        for (let j=i+1; j<map.length; j++) {
            map[j][0] = 0;
        }
    }
    
    for (let i=1; i<map.length; i++) {
        for (let j=1; j<map[0].length; j++) {
            if (map[i][j] === 0) continue;
            map[i][j] = (map[i-1][j] + map[i][j-1]) % 1000000007
        }
    }

    return map[map.length - 1][map[0].length - 1] % 1000000007
}