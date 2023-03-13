function solution(i, j, k) {
  return (
    Array.from({ length: j + 1 - i }, (_, index) => i + index)
      .join("")
      .split(k).length - 1
  );
}
