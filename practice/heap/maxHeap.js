class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    _swap = (a, b) => [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];

    size = () => this.heap.length - 1;

    peek = () => this.heap[1] ? this.heap[1] : null;

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