function solution(dirs) {
    // current y, current x.
    let cy = 0, cx = 0;
    const command = {
        U: [-1, 0],
        D: [1, 0],
        R: [0, 1],
        L: [0, -1]
    };
    
    const set = new Set();
    for (const dir of dirs.split("")) {
        const [ny, nx] = [cy + command[dir][0], cx + command[dir][1]];
        if (ny < -5 || nx < -5 || ny > 5 || nx > 5) continue;
        
        set.add(`${cy},${cx},${ny},${nx}`);
        set.add(`${ny},${nx},${cy},${cx}`);
        cy = ny;
        cx = nx;
    }
    
    return set.size / 2;
}