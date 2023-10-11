function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    while (routes.length > 0) {
        const base = routes[0][1];
        routes = routes.filter( e => e[0] > base );
        count += 1;
    }
    
    return count;
}