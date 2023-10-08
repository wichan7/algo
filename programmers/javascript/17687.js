function solution(n, t, m, p) {
    let str = "";
    
    for (let i=0; str.length <= t*m; i++) {
        str += i.toString(n);
    }
    
    if (m === p) p = 0;
    let count = 0;
    let result = "";
    for (let i=0; i<str.length; i++) {
        if ((i + 1) % m === p) {
            count += 1;
            result += str[i];
        }
        if (count === t) return result.toUpperCase();
    }
}