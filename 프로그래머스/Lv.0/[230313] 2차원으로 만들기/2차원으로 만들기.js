function solution(num_list, n) {
  const array = [];

  for (let i = 0; i < num_list.length / n; i++) {
    const array_list = [];

    for (let j = 0; j < n; j++) {
      array_list.push(num_list[j + n * i]);
    }
    array.push(array_list);
  }
  return array;
}
