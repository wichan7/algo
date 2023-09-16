function solution(arr) {
    let lcm = arr[0];
    let idx = 1;
    
    for (; idx < arr.length; idx++) {
        let a, b, c;
        if (lcm < arr[idx]) {
            a = arr[idx]
            b = lcm
        } else {
            a = lcm
            b = arr[idx]
        }
        
        while (true) {
            c = a % b
            if (c === 0) {
                lcm = lcm * arr[idx] / b
                break
            } else {
                a = b
                b = c
            }
        }
    }
    
    return lcm;
}