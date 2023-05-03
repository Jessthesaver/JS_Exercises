const str = "potato";
const pttr = "a*";

function check(str, pattern) {
  let success = [];
  let failure = false;
  let splitStr = [...str];
  let splitPattern = [...pattern];

  for (let letter = 0; letter < splitStr.length; letter++) {
    for (let element = 0; element < splitPattern.length; element++) {
      if (failure === true) {
        break;
      }
      if (
        (splitPattern[element] === "*" &&
          splitStr[letter + element] &&
          letter === element) ||
        splitPattern[element] === splitStr[letter + element]
      ) {
        success.push(splitStr[letter + element]);
      } else if (splitPattern[element].charAt() !== splitStr[letter].charAt()) {
        failure = true;
      }
    }
  }

  success = success.join("");

  if (success.length === pattern.length) {
    return success;
  } else if (failure) {
    return false;
  }

  return { success, failure };
}

function test(stra, strb) {
  if (strb.length > stra.length) {
    return false;
  }
  if (strb.includes("*")) {
    return check(stra, strb);
  } else {
    if (stra.includes(strb)) {
      return strb;
    }
  }
}
console.log(test(str, pttr));
