// https://www.acmicpc.net/problem/9012
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        3
        ((
        ))
        ())(()
        `).trim().split("\n").map(line => line.trim());
const T = Number(stdin.splice(0, 1));

for (let brackets of stdin.map(row => row.split(""))) {
    let stack = [];
    
    for (let bracket of brackets) {
        if (bracket === "(") {
            stack.push("(");
            continue;
        }

        if (stack.at(-1) === "(") stack.pop();
        else stack.push("-");
    }
    console.log(stack.length === 0 ? "YES" : "NO");
}