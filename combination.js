const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function combination(arr, n) {
    if (n === 1) return arr.map(e => [e]);

    const result = [];
    for (let i=0; i<=arr.length-n; i++) {
        const comb = combination(arr.slice(i + 1), n - 1);
        result.push(...comb.map(e => [arr[i], ...e]));
    }

    return result;
}

console.log(combination(numbers, 3))