function solution(s) {
    const arr = JSON.parse(s.replace(/\{/g, "[").replace(/}/g, "]"));
    arr.sort( (a, b) => a.length - b.length );
    
    const result = [arr[0][0]];
    for ( let i=1; i<arr.length; i++ ) {
        for ( let j=0; j<arr[i].length; j++ ) {
            if (!result.includes(arr[i][j])) {
                result.push(arr[i][j]);
            }
        }
    }
    
    return result
}