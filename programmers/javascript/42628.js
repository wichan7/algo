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