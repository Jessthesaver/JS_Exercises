const input=[2,0,4,5,0,2,0,0,3];

function ordenatorsecond(array){
    let length=array.length
    for(let i =0;i<length;i++){
        console.log('im here')
        for(let j=0;j<length;j++){
            if(array[j]==0 && array[j+1]!=undefined){
                let temp = array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
            }
        }
    }
    return array;
}
//this is very similar to the bubble sort algorithm, just adapted to only move 0's 
console.log(ordenatorsecond(input));