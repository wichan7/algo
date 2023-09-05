function solution(phone_number) {
    return phone_number.substring(0, phone_number.length - 4).replace(/./gi, "*") + phone_number.substring(phone_number.length - 4, phone_number.length);
}