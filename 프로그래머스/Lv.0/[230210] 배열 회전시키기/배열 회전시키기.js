function solution(numbers, direction) {
  return direction === "left"
    ? numbers.slice(1).concat(numbers[0])
    : numbers.slice(-1).concat(numbers.slice(0, -1));
}
