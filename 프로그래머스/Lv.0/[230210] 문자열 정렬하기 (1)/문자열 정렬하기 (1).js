function solution(my_string) {
  return my_string
    .split("")
    .map((v) => Number(v))
    .filter((cur) => !isNaN(cur))
    .sort((a, b) => a - b);
}
