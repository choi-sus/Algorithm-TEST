function solution(age) {
  const array = Array.from({ length: 10 }, (v, i) =>
    String.fromCharCode(i + 97)
  );
  return String(age)
    .split("")
    .map((el) => array[+el])
    .join("");
}
