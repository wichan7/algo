function solution(stones, k) {
    let l = Infinity, r = -Infinity;
    for (let s of stones) {
        if (s < l) l = s;
        if (s > r) r = s;
    }

    if (l === r) {
        if (isValid(stones, k, l)) return l;
        else return 0;
    }
    
    let max = 0;
    while (l < r) {
        let m = ~~((l + r) / 2);
        if (isValid(stones, k, m)) {
            max = m;
            l = m + 1;
        } else r = m;
    }

    return max;
}

function isValid(stones, k, n) {
    let count = 0;
    for (const stone of stones) {
        if (stone < n) count += 1;
        else count = 0;
        if (count === k) return false;
    }
    return true;
}