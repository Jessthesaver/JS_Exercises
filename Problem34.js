const initheigth=10;

function bounce(heigth){
    return function(){
        if(heigth>0){
            heigth--;
            return heigth;
        }else{
            throw new Error(`The ball can't keep bouncing`);
        }
    }
    
}

let heigth=bounce(initheigth);
console.log(heigth());
console.log(heigth());

heigth()