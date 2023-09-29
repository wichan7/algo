let max = -Infinity;

function solution(k, dungeons, visit=0) {
    dungeons = dungeons.filter(d => k >= d[0]);
    if (dungeons.length === 0 && max < visit) {
        max = visit;
    }

    for (let i = 0; i<dungeons.length; i++) {
        const energy = dungeons[i][1];
        solution(
            k - energy,
            [...dungeons.slice(0, i), ...dungeons.slice(i + 1, dungeons.length)],
            visit + 1
        );
    }
    
    return max;
}