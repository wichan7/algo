function solution(n) {
    let count = 0;
    for (let i=1; i<=n; i++) {
        let sum = 0;
        for (let j=0; sum<n; j++) {
            sum += i + j;
        }
        if (sum === n) {
            count += 1;
        }
    }
    
    return count;
}