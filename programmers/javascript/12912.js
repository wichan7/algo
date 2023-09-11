function solution(a, b) { 
    if (a === b) return a
    if (a > b) {
        let t = a
        a = b
        b = t
    }
    
    const len = b - a + 1
    const loopCount = Math.floor(len / 2)
    const sum = a + b
    const mid = sum / 2
    
    return len % 2 === 0 ? sum * loopCount : sum * loopCount + mid
}