function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);
    
    let cursor = B.length - 1;
    let count = 0;
    for (let i=A.length; i>=0; i--) {
        if (A[i] < B[cursor]) {
            count += 1;
            cursor -= 1;
        }
    }
    
    return count;
}