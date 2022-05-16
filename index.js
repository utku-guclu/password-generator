const buttons = document.getElementsByClassName("button");
const button = document.querySelector("button");
const input = document.querySelector("input");
const alert = document.querySelector("p");

const numbers = Array.from(Array(10).keys());
const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));
const alphabetLower = alphabet.map((alph) => alph.toLowerCase());
const alphabetExtend = alphabet.concat(alphabetLower);
const symbols = [
  "!",
  "%",
  "$",
  "&",
  "/",
  "(",
  ")",
  "=",
  "-",
  "_",
  "?",
  "@",
  "^",
  "<",
  ">",
  "#",
];

let DIGIT;

// big data
const passPool = numbers.concat(alphabetExtend).concat(symbols);

button.addEventListener("click", () => {
  Array.from(buttons).forEach((button) => {
    button.textContent = generatePass();
  });
});

function generatePass() {
  // change DIGIT
  if (input.value != "" && !isNaN(input.value)) {
    DIGIT = input.value;
  } else {
    DIGIT = 16;
  }

  //generate pass
  let pass = "";
  if (DIGIT < 6) {
    let message = "Minimum pass length is 6";
    alert.textContent = message;
  } else {
    alert.textContent = "";
    for (let i = 0; i < DIGIT; i++) {
      let randomNumber = Math.floor(Math.random() * passPool.length);
      let randomPick = passPool[randomNumber];
      pass += randomPick;
    }
  }

  return pass;
}
