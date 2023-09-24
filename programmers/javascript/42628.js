1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
function solution(operations) {
    const queue = [];

    for (const operation of operations) {
        const [op, param] = operation.split(" ");

        if (op === "I") {
            queue.push(Number(param));
            queue.sort((a, b) => a - b);
        }

        if (op === "D") {
            if (Number(param) == 1) {
                queue.pop();
            }

            if (Number(param) == -1) {
                queue.shift();
            }
        }
    }

    if (queue.length === 0) {
        return [0, 0];
    }

    return [queue[queue.length - 1], queue[0]]
}