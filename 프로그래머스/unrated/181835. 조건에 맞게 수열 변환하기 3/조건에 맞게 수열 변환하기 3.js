function solution(arr, k) {
    return arr.map((num, _) => k % 2 ? num * k : num + k);
}