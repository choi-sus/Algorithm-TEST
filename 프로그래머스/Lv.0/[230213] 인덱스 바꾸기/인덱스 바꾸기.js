function solution(my_string, num1, num2) {
  let clone = [...my_string];
  clone[num1] = my_string[num2];
  clone[num2] = my_string[num1];
  return clone.join("");
}
