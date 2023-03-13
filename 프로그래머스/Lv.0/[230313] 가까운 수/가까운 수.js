function solution(array, n) {
  return array[
    array
      .map((el) => Math.abs(el - n))
      .indexOf(Math.min(...array.map((el) => Math.abs(el - n))), 1)
  ];
}
