class Queue {
    constructor() {
        this.queue = [];
    }
    isEmpty = () => this.queue.length === 0;
    enq = (e) => this.queue.push(e);
    deq = () => this.queue.shift();
}

function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    const q = new Queue();
    const visit = new Array(words.length).fill(false);
    
    q.enq([begin, 0]);
    while (!q.isEmpty()) {
        const [origin, count] = q.deq();
        for (let i=0; i<words.length; i++) {
            if (isConvertable(origin, words[i]) && !visit[i]) {
                if (words[i] === target) return count + 1;
                q.enq([words[i], count + 1]);
                visit[i] = true;
            }
        }
    }
    
    return 0;
}

function isConvertable(origin, target) {
    let diff = 0;
    for (let i=0; i<origin.length; i++) {
        if (origin[i] !== target[i])
            diff += 1;
    }
    return diff === 1 ? true : false;
}