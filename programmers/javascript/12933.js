function solution(n) {
    return +[...n+""].map(n=>+n).sort().reverse().join("")
}