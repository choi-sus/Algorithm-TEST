function solution(n, control) {
    const operator = {
        "w" : +1,
        "s" : -1,
        "d" : +10,
        "a" : -10
    }
    return Array.from(control).reduce((acc, cur) =>  acc + operator[cur], n);
}