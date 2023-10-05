function solution(scoville, K) {
    const heap = new MinHeap();
    for (let n of scoville)
        heap.push(n);
    
    let count = 0;
    while (heap.getMin() < K && heap.size() > 1) {
        count += 1;
        const [n1, n2] = [heap.pop(), heap.pop()];
        heap.push(n1 + n2 * 2);
    }
    
    return heap.getMin() < K ? -1 : count;
}

class MinHeap {
    constructor() {
        this.heap = [null];
    }

    size = () => this.heap.length - 1;

    getMin = () => this.heap[1] ? this.heap[1] : null;

    swap = (a, b) => [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];

    push = (value) => {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            this.swap(parIdx, curIdx)
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
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}