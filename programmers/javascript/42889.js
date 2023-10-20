function solution(N, stages) {
    let fails = new Array(N).fill(0);
    stages.sort((a, b) => a - b);
    
    let i=0, j=0;
    while (i < stages.length) {
        let count = 0;
        while (stages[j] === stages[i] && j < stages.length) {
            count += 1;
            j++;
        }
        fails[stages[i] - 1] = count / (stages.length - i);
        i = j;
    }
    fails = fails.slice(0, N);
    fails = fails.map( (e, i) => ({failure: e, idx: i + 1}) );
    fails.sort( (a, b) => b.failure - a.failure );
    fails = fails.map( (e) => e.idx );
    
    return fails
}