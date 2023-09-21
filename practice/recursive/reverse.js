function reverse(s) {
    if (s.length === 0) return "";
    return s[s.length - 1] + reverse(s.slice(0, s.length - 1));
}

console.log(reverse("hello world!"));