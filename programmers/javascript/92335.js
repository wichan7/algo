function solution(n, k) {
    const numbers = n.toString(k).split("0").map( e => Number(e) );
    return numbers.reduce( (a, c) => a + isPrime(c), 0);
}

function isPrime(n) {
    if (n < 2) return 0;
    const sqrt = Math.sqrt(n);
    for (let i=2; i<=~~sqrt; i++)
        if (n % i === 0) return 0;
    return 1;
}