function solution(numbers, target, idx=0, sum=0) {
    if (idx === numbers.length) {
        if (sum === target) 
            return 1;
        else
            return 0;
    }
    
    let count = 0;
    count += solution(numbers, target, idx + 1, sum + numbers[idx]);
    count += solution(numbers, target, idx + 1, sum - numbers[idx]);
    
    return count;
}