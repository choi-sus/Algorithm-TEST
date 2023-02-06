function solution(dot) {
  let position = dot.filter((el) => el > 0).length;
  return position === 2
    ? 1
    : position === 1 && dot[0] < 0
    ? 2
    : position === 0
    ? 3
    : 4;
}
