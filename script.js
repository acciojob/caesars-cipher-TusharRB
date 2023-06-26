const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedStr = "";

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];

    // Check if the character is a letter in the lookup table
    if (lookup.hasOwnProperty(char)) {
      // Append the decoded character to the decoded string
      decodedStr += lookup[char];
    } else {
      // Append non-letter characters as is
      decodedStr += char;
    }
  }

  return decodedStr;
}

console.log(rot13("SERR YBIR? NPPVBWBO")); // Output: "FREE LOVE? ACCIOSBO"

// Do not change this line
window.rot13 = rot13;
