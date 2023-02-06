function solution(n, k) {
  let drink = (n < 10 ? k : k - parseInt(n / 10)) * 2000;
  return n * 12000 + drink;
}
