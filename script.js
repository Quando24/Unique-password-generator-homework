// Assignment Code 
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});
//Checks for Password clarity 
var chosenumbers; 
var choselength; 
var choselowercharacters; 
var choseuppercharacters; 
var chosespecialcharacters;
// All options of characters to makeup the password(s)
var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var uniqueCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "[", "{", "]", "}", "?", "/", "|", "<", ">", ".", ",", ";", ":"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
var allOptions;
  // creates a function to select a random item from an array(s)
function generatePassword(){
   choselength = window.prompt("How many characters would like for your password? Must be between 8 and 128 characters!");
  // If the user does not indicate a length
  if (!choselength){
    window.alert ("Choose a password length with a value between 8 and 128 first!");
  } // If the length submitted is not between 8 and 128
  else if (choselength < 8 || choselength > 128){
    choselength = window.confirm("Has to be between 8 and 128 characters!");  
  } 
  if (choselength===8 || choselength <=128) {
  var choselowercharacters = window.confirm("Would you like to use lowercase letters?"); 
  var choseuppercharacters = window.confirm("Would you like to use uppercase letters?"); 
  var chosenumbers = window.confirm("Would you like to use numbers?"); 
  var chosespecialcharacters = window.confirm("Would you like to use special characters?");
}; 
// Establishes the necessary conditions
if (!choselowercharacters && !choseuppercharacters && !chosenumbers && !chosespecialcharacters) {
  allOptions = window.alert ("You must make the necessary selections to satisfy all requirements!");
// Password generation begins
} 
else if (choseuppercharacters && choselowercharacters && chosenumbers && chosespecialcharacters) {
  allOptions = lowerCharacters.concat(upperCharacters, uniqueCharacters, numbers);
} 
// Three piece criteria
else if (choselowercharacters && choseuppercharacters && chosespecialcharacters){
allOptions = lowerCharacters.concat(upperCharacters,uniqueCharacters);
} else if (choselowercharacters && choseuppercharacters && chosenumbers){ 
  allOptions = lowerCharacters.concat(upperCharacters,numbers);
} else if (choselowercharacters && chosenumbers && chosespecialcharacters){
  allOptions = lowerCharacters.concat(numbers, uniqueCharacters);
} else if (choseuppercharacters && chosenumbers && chosespecialcharacters){
  allOptions = upperCharacters.concat(numbers, uniqueCharacters);
} 
// two piece criteria 
else if (choseuppercharacters && choselowercharacters){
  allOptions = lowerCharacters.concat(upperCharacters);
} else if (choselowercharacters && chosenumbers){
  allOptions = lowerCharacters.concat(numbers);
} else if (choselowercharacters && chosespecialcharacters){
  allOptions = lowerCharacters.concat(uniqueCharacters);
} 
else if (choseuppercharacters && chosenumbers){
  allOptions = upperCharacters.concat(numbers);
} else if (choseuppercharacters && chosespecialcharacters){
  allOptions = upperCharacters.concat(uniqueCharacters);
} 
else if (chosespecialcharacters && chosenumbers){
  allOptions = uniqueCharacters.concat(numbers);
} 
// one piece criteria 
else if (choselowercharacters) {
  allOptions = lowerCharacters;
} else if (choseuppercharacters) {
  allOptions = upperCharacters; 
} else if (chosespecialcharacters) {
  allOptions = uniqueCharacters;
} else if (chosenumbers) {
  allOptions = numbers;
};
// create an object to hold the password's length
var password = []; 
// random selection of a password 
for (var i = 0; i < choselength; i++) {
  var pickChoices = allOptions[Math.floor(Math.random()* allOptions.length)];
  password.push(pickChoices);
} 
// log to the console to see if the function is working
console.log(password);
//Convert password from array to string to generate the password onto the page 
var ps = password.join("");
// Run a test on now converted string, and then log to the console
console.log(ps); 
  writePassword(ps);
  return ps; 
    } 
 // Write password to the #password input
    function writePassword() {
    var password = document.querySelector("#password");
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
