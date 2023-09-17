function solution(want, number, discount) {
    let dict = {}
    for (let i=0; i<want.length; i++) {
        dict[want[i]] = number[i]
    }

    let count = 0;
    for (let i=0; i<=discount.length - 10; i++) {
        let shoppings = JSON.parse(JSON.stringify(dict))
        let j=i
        for (; j < j + 10; j++) {
            const discountItem = discount[j];
            if (!shoppings[discountItem]) {
                break;
            }
            shoppings[discountItem] -= 1;
            if (shoppings[discountItem] < 0) {
                break;
            }
        }
        if (j == i + 10) {
            count += 1;
        }
    }
    return count;
}