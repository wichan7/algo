function solution(cacheSize, cities) {
    const cache = new Cache(cacheSize);
    let responseTime = 0;

    for (let i=0; i<cities.length; i++) {
        const city = cities[i];
        responseTime += cache.access(city.toLowerCase(), i);
    }
    
    return responseTime;
}

class Cache {
    constructor(cacheSize) {
        this.cache = {};
        this.maxSize = cacheSize;
    }
    
    access(key, timestamp) {
        if (this.maxSize === 0) return 5;
        
        if (this.cache[key] >= 0) {
            this.cache[key] = timestamp;
            return 1;
        }
        
        if (this.size() >= this.maxSize ) {
            let min = Infinity;
            let minKey = '';
            
            for (let k of Object.keys(this.cache)) {
                if (this.cache[k] < min) {
                    min = this.cache[k];
                    minKey = k;
                }
            }
            delete this.cache[minKey];
        }
        
        this.cache[key] = timestamp;
        return 5;
    }
    
    size() {
        return Object.keys(this.cache).length;
    }
}