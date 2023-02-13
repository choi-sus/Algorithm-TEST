function solution(order) {
  return Array.from(order.toString()).filter((v) => v != 0 && !(v % 3)).length;
}
