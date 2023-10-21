function solution(gems) {
    const N = new Set(gems).size;
    const map = new Map();
    let ans = [0, gems.length - 1];
    let l=0, r=0;
    
    while (l < gems.length && r <= gems.length) {
        if (map.size === N) {
            if (r - 1 - l < ans[1] - ans[0])
                ans = [l, r - 1];
            const key = gems[l];
            if (map.get(key) > 1) {
                map.set(key, map.get(key) - 1);
            } else map.delete(key);
            
            l++;
        } else {
            const key = gems[r];
            map.set(key, (map.get(key) || 0) + 1);
            
            r++;
        }
    }
    
    return [++ans[0], ++ans[1]]
}