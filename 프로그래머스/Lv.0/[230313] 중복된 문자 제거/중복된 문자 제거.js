function solution(my_string) {
  return Array.from(my_string)
    .reduce((acc, cur) => {
      {
        acc.includes(cur) ? acc : acc.push(cur);
      }
      return acc;
    }, [])
    .join("");
}
