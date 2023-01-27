let test=[1,2,3,[4,5,[6,7]], 8,9];
const ivantest= [1,,[1]]


function flattener(arr) {
  let result = [];
  let main = arr;
  let first;
  while(main.length > 0) {
     first = main[0];
     if(Array.isArray(first)) { 
     Array.prototype.splice.apply(main, [0, 1].concat(first));
  } else {
     result.push(first);
     main.splice(0, 1);
  }
}
  return result;
}
console.log(flattener(test));