const alphabet = ['A', 'E', 'I', 'O', 'U'];

function solution(target, now="A", count=1) {
    if (target === now)
        return count;
    
    if (now.length < 5)
        return solution(target, now + alphabet[0], ++count);
    
    let flag = true;
    while (flag) {
        for (let i=now.length-1; i>=0; i--) {
            if (now[i] !== 'U') {
                now = now.slice(0, i) + alphabet[alphabet.indexOf(now[i]) + 1];
                flag = false;
                break;
            }
        }
        
    }
    return solution(target, now, ++count);
}

console.log(solution("AAA"))