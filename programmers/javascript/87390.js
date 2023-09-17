function solution(n, left, right) {
    const result = [];
    
    for (let i=left; i<=right; i++) {
        const mod = i % n;
        const div = parseInt(i / n);
        
        result.push( (mod > div ? mod : div) + 1 )
    }
    
    return result;
}