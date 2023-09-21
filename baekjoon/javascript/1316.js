// https://www.acmicpc.net/problem/1316
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
4
aba
abab
abcabc
a`
).trim().split("\n");

let count = 0;
for (let word of stdin.slice(1)) {
    const hash = {};
    let i=0;
    for (; i<word.length; i++) {
        if (hash[word[i]] < i - 1) {
            break;
        }
        hash[word[i]] = i;
    }
    if (i === word.length) {
        count += 1;
    }
}

console.log(count)