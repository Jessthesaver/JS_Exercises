function fnbasis(base){
    return function (power){
        return Math.pow(base,power);
    }
}

let basefour=fnbasis(4);

console.log(basefour(3))