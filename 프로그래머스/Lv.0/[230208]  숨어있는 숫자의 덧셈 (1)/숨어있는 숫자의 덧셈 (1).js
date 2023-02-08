function solution(my_string) {
  return my_string
    .split("")
    .reduce((acc, cur) => (Number(cur) ? acc + Number(cur) : acc + 0), 0);
}
