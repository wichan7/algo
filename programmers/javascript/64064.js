let result = [];

function solution(user_id, banned_id) {
    dfs(user_id, banned_id, []);
    result = result.map( arr => arr
                                .sort((a, b) => a > b ? 1 : -1)
                                .join("#")
                       );
    
    return new Set(result).size;
}

function dfs(user_id, banned_id, sliced) {
    if (banned_id.length === 0) 
        return result.push(sliced);
    
    for (let i=0; i<user_id.length; i++) {
        if (isValid(user_id[i], banned_id[0])) {
            dfs( [...user_id.slice(0, i), ...user_id.slice(i + 1, user_id.length)]
                     , banned_id.slice(1, banned_id.length)
                     , [...sliced, user_id[i]] );
        }
    }
}

function isValid(id, filter) {
    if (id.length !== filter.length)
        return false;
    
    for (let i=0; i<filter.length; i++) {
        if (filter[i] === "*" || id[i] === filter[i]) continue;
        return false;
    }
    return true;
}