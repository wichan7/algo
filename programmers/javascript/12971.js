function solution(sticker) {
    if (sticker.length === 1) return sticker[0];
    if (sticker.length === 2) return Math.max(sticker[0], sticker[1]);
    if (sticker.length === 3) return Math.max(sticker[0] + sticker[2], sticker[1]);
    
    let max = -Infinity;
    for (let i=0; i<2; i++) {
        const s = sticker.slice();
        i === 0 ? s.shift() : s.pop();
        const dp = new Array(s.length).fill(0);
        dp[0] = s[0];
        dp[1] = s[1];
        dp[2] = s[0] + s[2];
        
        for (let i=3; i < s.length; i++) {
            dp[i] = Math.max(dp[i - 2] + s[i], dp[i - 3] + s[i])
        }
        for (let elem of dp) {
            if (max < elem) max = elem;
        }

    }
    
    return max;
}