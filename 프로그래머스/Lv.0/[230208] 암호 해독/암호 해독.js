function solution(cipher, code) {
  let string = "";

  for (let i = 0; i < parseInt(cipher.length / code); i++) {
    string += cipher[code * (i + 1) - 1];
  }
  return string;
}
