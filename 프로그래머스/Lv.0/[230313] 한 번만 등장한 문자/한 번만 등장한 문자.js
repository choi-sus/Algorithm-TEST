function solution(s) {
  return Array.from(s)
    .filter((v) => s.indexOf(v) === s.lastIndexOf(v))
    .sort()
    .join("");
}
