function solution(n, words) {
    let history = new Set();
    history.add(words[0]);
    
    for (let i=1; i<words.length; i++) {
        const word = words[i];
        const prevWord = words[i - 1];

        if (word[0] !== prevWord[prevWord.length - 1] || history.size === history.add(word).size) {
            return [ i % n + 1, parseInt(i / n) + 1 ];
        }
    }
    
    return [0, 0];
}