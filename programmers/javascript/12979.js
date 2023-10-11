function solution(n, stations, w) {
    let pointer = 1;
    let count = 0;
    
    for (let i=0; i<stations.length; i++) {
        const [l, r] = [stations[i] - w, stations[i] + w];
        if (pointer < l)
            count += Math.ceil((l - pointer) / (w * 2 + 1))

        pointer = r + 1;
    }
    
    return n < pointer ? count : count + Math.ceil((n+1 - pointer) / (w * 2 + 1))
}