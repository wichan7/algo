function solution(people, limit) {
    let l = 0;
    let r = people.length - 1;
    let count = 0;
    
    people.sort((a, b) => a - b);
    while (l <= r) {
        if (people[l] + people[r] > limit) {
            r = r - 1;
        } else {
            l = l + 1;
            r = r - 1;
        }
        count += 1;
    }
    
    return count;
}