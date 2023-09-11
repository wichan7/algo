function solution(arr, divisor) {
    let result = arr.reduce((a, c) => c % divisor === 0 ? [...a, c] : a, []);
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1]
}