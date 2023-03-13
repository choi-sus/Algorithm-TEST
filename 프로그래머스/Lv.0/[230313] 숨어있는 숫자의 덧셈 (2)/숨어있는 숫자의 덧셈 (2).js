function solution(my_string) {
  return my_string
    .replace(/[a-zA-Z]/gi, " ")
    .split(" ")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
