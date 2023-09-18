function solution(citations) {
    let list = citations
                .sort( (a, b) => a - b )
                .reverse()

    for (let H=list[0]; true; H--) {
        let j = 0;
        for(; j<H; j++) {
            if (list[j] < H || !list[j]) {
                break
            }
        }
        if (j === H) {
            return H
        }
    }
}