class Queue {
    constructor() {
        this.q = [];
        this.idx = 0;
    }
    enq = (e) => this.q.push(e);
    deq = () => this.q[this.idx++];
    isEmpty = () => this.q.length === this.idx;
}

function solution(start, target, n) {
    if (start === target) return 0;
    let q = new Queue();
    
    q.enq([target, 0]);
    while (!q.isEmpty()) {
        const [f, c] = q.deq();
        
        if (f - n === start || f / 2 === start || f / 3 === start)
            return c + 1;
        
        if (f - n > start)
            q.enq([f - n, c + 1]);
        
        if (f / 2 > start && f % 2 === 0)
            q.enq([f / 2, c + 1]);
        
        if (f / 3 > start && f % 3 === 0)
            q.enq([f / 3, c + 1]);
        
    }
    
    return -1;
}