const str = "potato";
const pttr = "pot";

function check(str, pattern) {
  let success = [];
  let failure = [];
  let splitStr = [...str];
  let splitPattern = [...pattern];

  for (let letter = 0; letter < splitStr.length; letter++) {
    for (let element = 0; element < splitPattern.length; element++) {
      if (splitPattern[element] === "*" && letter === element) {
        success.push(splitPattern[element]);
      } else {
        if (splitPattern[element].charAt() === splitStr[letter].charAt()) {
          success.push(splitStr[element]);
        } else if (
          splitPattern[element].charAt() !== splitStr[letter].charAt()
        ) {
          failure.push(splitStr[element]);
        }
      }
    }
  }
  success = success.join("");

  if (success.length === pattern.length) {
    return success;
  }
  if (success && failure.length === 0) {
    return success;
  } else if (failure.length !== 0 || failure.length === 0) {
    return pattern;
  }

  return { success, failure };
}

function test(stra, strb) {
  if (strb.includes("*")) {
    return check(stra, strb);
  } else {
    if (stra.includes(strb)) {
      return strb;
    }
  }
}
console.log(test(str, pttr));
