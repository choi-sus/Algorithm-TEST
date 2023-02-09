function solution(price) {
  return parseInt(
    price *
      (500000 <= price
        ? 0.8
        : 300000 <= price
        ? 0.9
        : 100000 <= price
        ? 0.95
        : 1)
  );
}
