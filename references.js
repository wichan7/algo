// 약수
function getDivisorsBySqrt(n) {
    let result = [];
    for (let i=1; i<=Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);
            if (i !== n / i) {
                result.push(n / i);
            }
        }
    }
    result.sort( (a, b) => a - b );
    return result;
}

function getDivisorsByLoop(n) {
    let result = [];
    for (let i=1; i<=n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }

    return result;
}