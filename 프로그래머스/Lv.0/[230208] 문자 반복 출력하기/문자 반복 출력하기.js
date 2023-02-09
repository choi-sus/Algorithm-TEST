function solution(my_string, n) {
  let string = "";
  for (let i = 0; i < my_string.length; i++) {
    const a = my_string[i];
    for (let j = 0; j < n; j++) {
      string += a;
    }
  }
  return string;
}
