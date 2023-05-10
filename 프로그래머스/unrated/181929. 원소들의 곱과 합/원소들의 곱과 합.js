function solution(num_list) {
    var answer = 0;
    return num_list.reduce((acc, cur) => acc * cur ,1) > Math.pow(num_list.reduce((acc, cur) => acc + cur ,0), 2) ? 0 : 1;
}