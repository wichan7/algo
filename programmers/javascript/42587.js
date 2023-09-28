function solution(priorities, location) {
    priorities = priorities.map( e => ({ value: e }) );
    priorities[location]['isTarget'] = true;
    
    let count = 0;
    while (true) {
        let max = priorities[0].value;
        let maxIdx = 0;
        for (let i=1; i<priorities.length; i++) {
            if (max < priorities[i].value) {
                max = priorities[i].value;
                maxIdx = i;
            }
        }
        priorities.push(...priorities.splice(0, maxIdx));
        count += 1;
        if (priorities[0].isTarget) {
            return count;
        } else {
            priorities.shift();
        }
        
        if (priorities.length === 0) return;
    }
}