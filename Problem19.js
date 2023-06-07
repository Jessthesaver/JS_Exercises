const str = "potato";
const pttr = "a*";

function check(str, pattern) {
  let success = [];
  let splitStr = [...str];
  let splitPattern = [...pattern];

  for (let letter = 0; letter < splitStr.length; letter++) {
    let match = true;
    for (let element = 0; element < splitPattern.length; element++) {
      match =
        match &&
        (splitPattern[element] === "*" ||
          splitPattern[element] === splitStr[letter + element]);
      if (!match) break;

      if (match) success.push(splitStr[letter + element]);
    }

    if (success.length === pattern.length) {
      return success.join("");
    }
  }
  return null;
}

function test(str, pattern) {
  if (typeof str !== "string" || typeof pattern !== "string") {
    throw new Error(`Invalid input. Inputs must be a string`);
  } else if (str === null || str.trim() === "" || pattern.length > str.length) {
    return null;
  } else {
    return check(str, pattern);
  }
}

console.log(test(str, pttr));
