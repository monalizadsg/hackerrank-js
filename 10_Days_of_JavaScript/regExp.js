function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  let re = RegExp(/^([aeiou]).*\1$/);

  /*
   * Do not remove the return statement
   */
  return re;
}

function regexVarII() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */
  let re = /^(Mr\.|Dr\.|Er\.|Mrs\.|Ms\.)\s?[a-z|A-Z]+$/;

  /*
   * Do not remove the return statement
   */
  return re;
}

// s is a string that contains numbers and letters
// Write a regular expression that validates the string
// The expression must only output integer numbers

function regexVarIII() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  let re = RegExp("\\d+", "g");

  /*
   * Do not remove the return statement
   */
  return re;
}
