Array.prototype.duplicate = function(){
    let copyarr=this;
    let length=this.length;
    for(let i =0 ; i < length ; i++){
        copyarr.push(this[i]);
    }
    return copyarr;
};

const test=[1,2,3,4];

let double= test.duplicate();
console.log(double);