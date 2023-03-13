function solution(emergency) {
  return emergency.map(
    (el) => [...emergency].sort((a, b) => b - a).indexOf(el) + 1
  );
}
