function solution(n, t) {
  return Array(t)
    .fill(0)
    .reduce((acc, cur) => acc * 2, n);
}
