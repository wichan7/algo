function solution(n,a,b)
{
    if ( a > b ) {
        let t = a;
        a = b;
        b = t;
    }
    
    let round = Math.log(n) / Math.log(2);
    let l = 1;
    let r = n;
    
    while (true) {
        const mid = Math.floor( (l + r) / 2 );
        // a, b가 미드를 기준으로 구분되면, round 리턴
        if ( (a >= l && a <= mid) && (b <= r && b > mid) ) {
            return round;
        }
        
        // a, b가 l과 mid 사이에 있다면
        if ( (a >= l && a <= mid) && (b >= l && b <= mid) ) {
            r = mid;
        } else {
            l = mid;
        }
        
        round = round - 1;
    }
}