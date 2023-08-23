function solution(n) {
    let result = 0;
    
    for (let i=1; ; i++) {
        next = n + i;
        if (n.toString(2).replace(/0/g, "").length === next.toString(2).replace(/0/g, "").length) {
            result = next;
            break;
        }
    }
    
    return result;
}