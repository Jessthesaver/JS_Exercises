/*function intersection(array1, array2){
    let result = [];
    for(let i =0;i<array1.length;i++){
        for(let j=0;j<array2.length;j++){
            if(array1[i]==array2[j]){
                result.push(array1[i]);
            }
        }
    }
    return result;
}

let a=[1,2,3,4,5,6,8,9];
let b=[3,5,7]
let c=intersection(a,b);
console.log(c);*/
const arr1 = [2,7,4,6];
const arr2 = [7,1,9,7,4,4,5];
const intersect = (arr1 = [], arr2 = []) => {
   const map = {};
   arr1.forEach(a => {
      map[a] = map[a] ? map[a] + 1 : 1;
   })
   const result = [];
   for(let key of arr2) {
      if(key in map && map[key] > 0) {
         result.push(key);
         map[key]--;
      }
   }
   return result;
};
console.log(intersect(arr1, arr2));