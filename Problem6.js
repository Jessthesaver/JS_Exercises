Array.prototype.multiIndexOf = function (el) {
  var idxs = [];
  for (var i = this.length - 1; i >= 0; i--) {
    if (this[i] === el) {
      idxs.unshift(i);
    }
  }
  return idxs;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function addNClone(string) {
  let temp = string.split(" ");
  let last = temp[temp.length - 1];
  let next = months[months.indexOf(last) + 1];
  if (!next) {
    next = months[0];
  }
  let indexes = temp.multiIndexOf(last);
  for (let i = 0; i < indexes.length; i++) {
    temp.splice(indexes[i] + i + 1, 0, next);
  }
  return temp.join(" ");
}

let example = "November December November December";

console.log(addNClone(example));
