function solution(n, s) {
    if (s / n < 1) return [-1];
    
    const result = new Array(n).fill(Math.floor(s / n));
    for (let i=0; i<s%n; i++)
        result[i] += 1;
    
    return result.reverse();
}