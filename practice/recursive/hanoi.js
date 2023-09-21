function hanoi(n, start, dest, other) {
    if (n === 1) return;
    hanoi(n - 1, start, other, dest);
    console.log(`${start} to ${dest}`);
    hanoi(n - 1, other, dest, start);
}

console.log(hanoi(3, 1, 3, 2));