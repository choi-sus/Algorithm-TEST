function solution(num_str) {
    return Array.from(num_str).reduce((acc, cur) => acc + Number(cur) ,0);
}