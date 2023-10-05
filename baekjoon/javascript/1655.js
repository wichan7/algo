// https://www.acmicpc.net/submit/1655
const stdin = (
    process.platform === "linux"
        ? require('fs').readFileSync("/dev/stdin").toString()
        : `
        8
        0
        -1
        2
        -2
        3
        -3
        4
`
).trim().replace(/\r/g, "").split("\n");

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    _swap = (a, b) => [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];

    size = () => this.heap.length - 1;

    peek = () => this.heap[1] !== undefined ? this.heap[1] : null;

    push = (value) => {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[curIdx] < this.heap[parIdx]) {
            this._swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }

    pop = () => {
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this._swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    _swap = (a, b) => [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];

    size = () => this.heap.length - 1;

    peek = () => this.heap[1] !== undefined ? this.heap[1] : null;

    push = (value) => {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[curIdx] > this.heap[parIdx]) {
            this._swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }

    pop = () => {
        const max = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        while (this.heap[leftIdx] > this.heap[curIdx] || this.heap[rightIdx] > this.heap[curIdx]) {
            const maxIdx = this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
            this._swap(maxIdx, curIdx);
            curIdx = maxIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return max;
    }
}

function solution() {
    const result = [];
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();

    maxHeap.push(Number(stdin[1]));
    result.push(maxHeap.peek());
    for (let i = 2; i < stdin.length; i++) {
        const N = Number(stdin[i]);

        if (maxHeap.size() - minHeap.size() === 1) minHeap.push(N);
        else maxHeap.push(N);

        if (maxHeap.peek() > minHeap.peek()) {
            const [max, min] = [maxHeap.pop(), minHeap.pop()];
            maxHeap.push(min);
            minHeap.push(max);
        }

        result.push(maxHeap.peek());
    }

    return result;
}

console.log(solution().join("\n"));