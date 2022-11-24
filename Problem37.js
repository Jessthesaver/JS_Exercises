String.prototype.exclamation= function(){
    return `${this}!`;
}

let test= 'potato';

console.log('aby'.exclamation());

function add(...nums){
    let result=0;
    console.log(nums)
    for(let i=0;i<nums.length;i++){
        result=result+nums[i];
    }
    return result;
}

console.log(add(4,5,7,8))