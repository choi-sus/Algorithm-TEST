function solution(s) {
  return s
    .split(" ")
    .reduce(
      (acc, cur, i, array) =>
        cur === "Z" ? acc - Number(array[i - 1]) : acc + Number(cur),
      0
    );
}
