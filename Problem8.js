const input=[2,0,4,5,0,2,0,0,3];

function ordenator(array){
    let zeros=0
    let length=array.length
    for(let i =0;i<length;i++){
        while(array[zeros]===0 && zeros<length){
            zeros++
        }
        if(zeros<length){
            array[i]=array[zeros]
            zeros++
        }else{
            array[i]=0
            zeros++
        }
    }
    return array;
}
console.log(ordenator(input));