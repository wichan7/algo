function solution(my_string, queries) {
    
    for (let query of queries) {
        let left = my_string.substring(0, query[0]);
        let middle = my_string.substring(query[0], query[1] + 1);
        let right = my_string.substring(query[1] + 1, my_string.length);
        
        my_string = left + middle.split("").reverse().join("") + right;
    }
    
    return my_string;
}