function solution(elements) {
    let circular = [...elements, ...elements];
    let combinations = new Set();
    
    for (let i=1; i < elements.length; i++) {
        for (let j=0; j < elements.length; j++) {
            let sum = 0;
            for (let k=j; k<j+i; k++) {
                sum += circular[k];
            }
            combinations.add(sum);
        }
    }
    combinations.add(elements.reduce((a, c) => a + c), 0);
    
    return combinations.size;
}