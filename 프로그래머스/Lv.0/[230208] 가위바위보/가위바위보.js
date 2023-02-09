function solution(rsp) {
  return rsp
    .split("")
    .reduce((acc, cur) => {
      acc.push(cur == 2 ? 0 : cur == 0 ? 5 : 2);
      return acc;
    }, [])
    .join("");
}
