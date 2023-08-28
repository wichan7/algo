function solution(brown, yellow) {
    /*
    todo: 
     1. yellow 약수를 구한다.
     2. 약수 쌍에 각각 +2를 하고, 곱해 brown이 나오는 경우 return
    */
    let sqrt = Math.sqrt(yellow);
    for (let i=1; i<=sqrt; i++) {
        if (yellow % i === 0) {
            const yw = yellow / i;
            const yh = i;
            
            if ( (yw + 2) * (yh + 2) - yw * yh === brown ) {
                return [yw + 2, yh + 2]
            }
        }
    }
}