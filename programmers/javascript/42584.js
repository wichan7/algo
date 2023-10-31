function solution(prices) {
    const stack = [];
    const result = new Array(prices.length).fill().map((_, i) => prices.length - i - 1);
    
    for (let i=0; i<prices.length; i++) {
        const price = prices[i];
        while (stack.length > 0 && prices[stack.at(-1)] > price) {
            const t = stack.at(-1);
            result[t] = i - t;
            stack.pop();
        }
        stack.push(i);
    }

    return result;
}