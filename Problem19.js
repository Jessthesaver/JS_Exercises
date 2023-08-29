const str = "potato";
const pttr = "a*";

function check(str, pattern) {
  const n = pattern.length;
  for (let i = 0; i < n; i++) {
    let strLetter = str[i];
    let patternLetter = pattern[i];
    if (patternLetter === "*") {
      continue;
    }
    if (patternLetter !== strLetter) {
      return false;
    }
  }

  return true;
}

function test(str, pattern) {
  for (let i = 0; i < str.length - pattern.length + 1; i++) {
    const subString = str.slice(i, i + pattern.length);
    if (check(subString, pattern)) {
      return true;
    }
  }
  return false;
}

console.log(test(str, pttr));
