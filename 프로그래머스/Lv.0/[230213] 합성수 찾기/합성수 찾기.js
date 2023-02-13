function solution(n) {
  let count = 0;

  for (let i = 4; i <= n; i++) {
    let num = 0;

    for (let j = i; j > 0; j--) {
      if (i % j === 0) {
        num++;
      }
    }

    if (num > 2) {
      count++;
    }
  }
  return count;
}
