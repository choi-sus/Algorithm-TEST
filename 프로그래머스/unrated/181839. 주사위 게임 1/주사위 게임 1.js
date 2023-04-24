function solution(a, b) {
    const num = (a % 2 === 0 ? 1 : 0) + (b % 2 === 0 ? 1 : 0)
    let dice
    switch(num){
        case 0: dice = (a * a) + (b * b)
            break;
        case 1: dice = 2 * (a + b)
            break;
        case 2: dice = Math.abs(a - b)
            break;
    }
    return dice;
}