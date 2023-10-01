function solution(phone_book) {
    const hash = {};
    phone_book.sort((a, b) => a.length - b.length)

    for (let phone of phone_book) {
        let i = 1;
        for (; i<=phone.length; i++) {
            if (hash[phone.slice(0, i)]) return false;
        }
        hash[phone] = true;
    }

    return true;
}
