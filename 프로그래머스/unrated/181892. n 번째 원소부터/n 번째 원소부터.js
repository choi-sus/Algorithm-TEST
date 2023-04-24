function solution(num_list, n) {
    
    return num_list.filter((_, i) => n <= i + 1);
}