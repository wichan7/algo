function solution(genres, plays) {
    const hash = {};
    const result = [];
    
    for (let i=0; i<genres.length; i++) {
        if (!hash[genres[i]]) 
            hash[genres[i]] = {list: []};
        hash[genres[i]].list.push([i, plays[i]]);
    }
    
    for (let key in hash) {
        hash[key].list.sort( (a, b) => b[1] - a[1] );
        hash[key].tot = hash[key].list.reduce((a, c) => a + c[1], 0);
    }
    
    const sorted = Object.keys(hash).sort( (a, b) => hash[b].tot - hash[a].tot );
    for (let key of sorted) {
        result.push( ...hash[key].list.slice(0, 2).map(e=>e[0]) );
    }
    
    return result;
}