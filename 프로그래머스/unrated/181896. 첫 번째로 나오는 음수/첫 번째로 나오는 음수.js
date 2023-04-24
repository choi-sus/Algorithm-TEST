function solution(num_list) {
    const index = num_list.filter((num, _) => num < 0)[0]
    return index ? num_list.indexOf(index) : -1
}