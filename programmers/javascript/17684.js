function solution(msg) {
    const dict = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 
        'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 
        'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26
    };
    let index = 26;
    const result = [];
    
    for (let i=0; i<msg.length; i++) {
        for (let j=i; j<msg.length; j++) {
            if (j + 1 !== msg.length && dict[msg.slice(i, j + 2)]) continue;
            result.push(dict[msg.slice(i, j + 1)]);
            index += 1;
            dict[msg.slice(i, j + 2)] = index;

            i = j;
            break;
        }
    }

    return result;
}