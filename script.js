//password generator

// prettier-ignore
const charactersAll = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
// prettier-ignore
const charactersWithSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];
// prettier-ignore
const charactersWithNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// prettier-ignore
const charactersOnly = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let numbersCheckbox = document.querySelector("#numberscheck");
let symbolsCheckbox = document.querySelector("#symbolscheck");
let generateButton = document.querySelector("#genButton");
let passOne = document.querySelector("#pass1");
let passTwo = document.querySelector("#pass2");

let passwordLength = 15;
let ranNum;

function getRandomChar() {
  if (symbolsCheckbox.checked && numbersCheckbox.checked) {
    ranNum = Math.floor(Math.random() * charactersAll.length);
    return charactersAll[ranNum];
  } else if (symbolsCheckbox.checked && !numbersCheckbox.checked) {
    ranNum = Math.floor(Math.random() * charactersWithSymbols.length);
    return charactersWithSymbols[ranNum];
  } else if (!symbolsCheckbox.checked && numbersCheckbox.checked) {
    ranNum = Math.floor(Math.random() * charactersWithNumbers.length);
    return charactersWithNumbers[ranNum];
  } else {
    ranNum = Math.floor(Math.random() * charactersOnly.length);
    return charactersOnly[ranNum];
  }
}

function generateRandomPass() {
  let randomPass = "";
  for (let i = 0; i < passwordLength; i++) {
    randomPass += getRandomChar();
  }
  return randomPass;
}

let generatedFullPass1 = generateRandomPass();

generateButton.addEventListener("click", () => {
  passOne.textContent = generateRandomPass();
  passTwo.textContent = generateRandomPass();
});

//darkmode + lightmode

//body mainContainer h2 span button/button::hover passdiv/passdiv::hover break

let darkModeToggle = document.querySelector("#darkmodetoggle");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let span = document.querySelector("span");
let button = document.querySelector("button");
let breakdiv = document.querySelector("#break");
let passdiv = document.querySelector(".passdiv");
let container = document.querySelector("#mainContainer");
let label1 = document.querySelector("#label1");
let label2 = document.querySelector("#label2");

darkModeToggle.addEventListener("change", function () {
  container.classList.toggle("lightmode");
  body.classList.toggle("lightmode");
  button.classList.toggle("lightmode");
  h2.classList.toggle("lightmode");
  span.classList.toggle("lightmode");
  breakdiv.classList.toggle("lightmode");
  pass1.classList.toggle("lightmode");
  pass2.classList.toggle("lightmode");
  label1.classList.toggle("lightmode");
  label2.classList.toggle("lightmode");
});
