function solution(num_list) {
  let even = num_list.reduce((arr, cur) => (!(cur % 2) ? arr + 1 : arr + 0), 0);
  return [even, num_list.length - even];
}
