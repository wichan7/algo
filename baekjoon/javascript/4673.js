// https://www.acmicpc.net/problem/4673

const arr = new Array(10000 + 2).fill(true);
for (let i=1; i<arr.length; i++) {
    const N = i.toString().split("").reduce((a, c) => a + parseInt(c), 0) + i;
    if (N <= 10001) arr[N] = false;
}

for (let i=1; i<arr.length; i++) {
    if (arr[i]) console.log(i)
}