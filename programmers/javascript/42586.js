function solution(p, speeds) {
    const result = [];
    
    while (p.length > 0) {
        // progresses are getting old
        for (let i=0; i<p.length; i++) {
            p[i] = p[i] + speeds[i];
        }
        
        // dequeue completed progresses
        let count = 0;
        while (p[0] >= 100) {
            p.shift();
            speeds.shift();
            count += 1;
        }
        if (count > 0) result.push(count);
    }
    
    return result;
}