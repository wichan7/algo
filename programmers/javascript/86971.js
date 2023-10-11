function solution(n, wires) {
    let min = Infinity;
    
    for (let i=0; i<wires.length; i++) {
        // init
        const nodes = new Array(n + 1).fill().map(e => ({visit: false, links: []}));
        const tempWires = [...wires.slice(0, i), ...wires.slice(i+1, wires.length)];
        for (const [from, to] of tempWires) {
            nodes[from].links.push(to);
            nodes[to].links.push(from);
        }
        
        // dfs
        dfs(nodes, 1);
        let count = nodes.reduce( (a, c) => a + (c.visit ? 1 : 0), 0);
        
        const visited = count;
        const invisited = n - count;
        const diff = Math.max(visited, invisited) - Math.min(visited, invisited);
        
        if (diff < min) min = diff;
    }
    
    return min;
}

function dfs(nodes, goto) {
    nodes[goto].visit = true;
    for (const link of nodes[goto].links.filter( e => !nodes[e].visit )) {
        dfs(nodes, link);
    }
}