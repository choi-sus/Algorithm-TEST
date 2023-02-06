function solution(n) {
  return Array(n)
    .fill(0)
    .map((el, i) => i + 1)
    .filter((v) => !(v % 2))
    .reduce((acc, cur) => acc + cur, 0);
}
