String.prototype.exclamation= function(){
    return `${this}!`;
}

let test= 'potato';

console.log('aby'.exclamation());

const add =(...nums)=>{
    return nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
 
console.log(add(4,5,7,8))