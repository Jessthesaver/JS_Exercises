Array.prototype.duplicate = function(){
    let copyarr=this;
    copyarr=copyarr.concat(copyarr)
    return copyarr;
};

const test=[1,2,3,4];

let double= test.duplicate();
console.log(double);