function solution(arr) {
    if (arr.length < 2) return [-1];
    
    let min = arr[0];
    let idx = 0;
    
    for (let i=1; i<arr.length; i++) {
        if (arr[i] < min) {
            idx = i;
            min = arr[idx];
        }
    }
    
    return [...arr.slice(0, idx), ...arr.slice(idx + 1, arr.length)]
}