const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function permutation(arr, n) {
    if (n === 1) return arr.map(e => [e]);
    
    const result = [];
    for (let i=0; i<arr.length; i++) {
        const perm = permutation([...arr.slice(0, i), ...arr.slice(i + 1, arr.length)], n - 1);
        result.push(...perm.map(e => [arr[i], ...e]));
    }

    return result;
}

console.log(permutation(numbers, 3));