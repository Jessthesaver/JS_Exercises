let test=[1,2,3,[4,5,[6,7]], 8,9];


function getArrayDepth(value) {
    return Array.isArray(value) ? 
      1 + Math.max(0, ...value.map(getArrayDepth)) :
      0;
  }
function flatenner(array){
   return array.flat(getArrayDepth(array));
}

console.log(flatenner(test))