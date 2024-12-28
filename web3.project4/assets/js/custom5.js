// ---------programiz.exp33(1)
function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
const string = prompt("Enter a string: ");
const value = checkPalindrome(string);
console.log(value);
// ---------programiz.exp33(2)
function checkPalindrome(string) {
  const arrayValues = string.split("");
  const reverseArrayValues = arrayValues.reverse();
  const reverseString = reverseArrayValues.join("");
  if (string == reverseString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
}
const string1 = prompt("Enter a string: ");
checkPalindrome(string1);
