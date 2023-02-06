function solution(n) {
  return Array(n)
    .fill(0)
    .map((el, i) => i + 1)
    .filter((cur) => cur % 2);
}
