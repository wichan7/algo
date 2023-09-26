function solution(n, works) {
    while (n > 0) {
        let max = works[0];
        let idx = 0;
        for (let i=0; i<works.length; i++) {
            if (max < works[i]) {
                max = works[i];
                idx = i;
            }
        }
        
        if (max === 0) return 0;
        works[idx] -= 1;
        n -= 1;
    }
    
    return works.reduce( (a, c) => a + c ** 2, 0);
}