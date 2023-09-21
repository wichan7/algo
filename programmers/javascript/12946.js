const answer = [];

function solution(n) {
    hanoi(n, 1, 3, 2);
    
    return answer;
}

function hanoi(n, start, dest, other) {
    if (n === 0) return;
    hanoi(n-1, start, other, dest);
    answer.push([start, dest]);
    hanoi(n-1, other, dest, start);
}