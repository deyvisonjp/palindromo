function palindromo(string) {
  // string = string.split(' ').join('');
  // string = string.split(',').join('');
  string = string.replace(/[^a-zA-Z ]/g, "")
  string = string.toLowerCase();
  for (var i = 0; i < string.length / 2; i++) {
    if (string[i] != string[string.length - i - 1]) {
      return false;
    } else {
      return true;
    }
  }
}


console.log(palindromo('nadar'));
console.log(palindromo('Socorram-me, subi no ônibus em Marrocos'))
console.log(palindromo('radar'))