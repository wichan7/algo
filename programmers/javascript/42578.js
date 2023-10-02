function solution(clothes) {
    const closet = {};
    for (let [_, type] of clothes) {
        !closet[type] ? closet[type] = 1 : ++closet[type];
    }
    
    let sum = 1;
    for (let key in closet) {
        sum *= closet[key] + 1;
    }
    sum -= 1;
    
    return sum;
}