/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const allVowels = "aeiou";
  let vowels = "";
  let consonants = "";

  for (let i of s) {
    allVowels.indexOf(i) !== -1 ? (vowels += i) : (consonants += i);
  }

  let result = vowels + consonants;

  for (let i of result) console.log(i);
}
