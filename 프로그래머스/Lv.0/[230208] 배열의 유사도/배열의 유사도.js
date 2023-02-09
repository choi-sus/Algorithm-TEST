function solution(s1, s2) {
  return s2.reduce((acc, cur) => (s1.includes(cur) ? acc + 1 : acc + 0), 0);
}
