const str = "potato";
const pttr = "po";

function check(str, pattern) {
  let success = [];
  let failure = [];
  let splitStr = [...str];
  let splitPattern = [...pattern];

  for (let letter = 0; letter < splitStr.length; letter++) {
    for (let element = 0; element < splitPattern.length; element++) {
      if (splitPattern[element] === "*" && letter === element) {
        success.push(splitStr[element]);
      } else {
        if (
          splitPattern[element].charAt() === splitStr[letter].charAt() &&
          letter === element
        ) {
          success.push(splitStr[element]);
        } else if (
          splitPattern[element].charAt() !== splitStr[letter].charAt() &&
          letter === element
        ) {
          failure.push(splitStr[element]);
        }
      }
    }
  }
  success = success.join("");

  if (success && failure.length === 0 && str.length >= pattern.length) {
    return success;
  } else if (failure.length !== 0 || failure.length === 0) {
    return pattern;
  }

  return { success, failure };
}

function test(stra, strb) {
  if (strb.includes("*")) {
    check(stra, strb);
  } else {
    return stra.includes(strb);
  }
}
console.log(test(str, pttr));
