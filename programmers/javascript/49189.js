class Queue {
    constructor() { this.q = [] }
    enq = (e) => this.q.push(e);
    deq = () => this.q.shift();
    isEmpty = () => this.q.length === 0 ? true : false;
}

function solution(n, edge) {
    // init 
    const nodes = {};
    for (let i=1; i<=n; i++)
        nodes[i] = { visit: false, link: [] };
    for (let [v1, v2] of edge) {
        nodes[v1].link.push(v2);
        nodes[v2].link.push(v1);
    }
    let q = new Queue();
    let maxDist = -1, maxCnt = -1;
    
    // calc
    q.enq([1, 0]);
    nodes[1].visit = true;
    while (!q.isEmpty()) {
        const [node, dist] = q.deq();

        if (dist > maxDist) {
            maxDist = dist;
            maxCnt = 1;
        } else if (dist === maxDist) {
            maxCnt += 1;
        }
        
        for (let next of nodes[node].link) {
            if (nodes[next].visit) continue;
            nodes[next].visit = true;
            q.enq([next, dist + 1]);
        }
    }
    
    return maxCnt;
}

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));