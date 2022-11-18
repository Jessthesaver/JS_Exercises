function getArrayDepth(value) {
    return Array.isArray(value) ? 
      1 + Math.max(0, ...value.map(getArrayDepth)) :
      0;
  }

function checkfortwo(...args){
    if(getArrayDepth(args)>1){
        args=args.flat(getArrayDepth(args));
    }
    for(let element in args){
        if(element==2){
            return '2 is an argument';
        }
    }
}

const test=[2,4,6,5,9];

console.log(checkfortwo(test));