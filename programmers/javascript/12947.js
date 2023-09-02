function solution(x) {
    return x % [...x+""].reduce((a, c)=>a + +c, 0) === 0 ? true : false
}