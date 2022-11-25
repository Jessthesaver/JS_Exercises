const arr=[3,2,1,0,-3,2,2,-2];

function combinator(array){
    let out=[];
    for(let i =0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            for(let k=j+1;k<array.length;k++){
                if(array[i]+array[j]+array[k]===0 && i!=j && i!=k && j!=k){
                    let combination=[array[i],array[j],array[k]]
                    if(!out.includes(combination)){
                        out.push(combination);
                    }
                }
            }
        }
    }
    return out;
}

console.log(combinator(arr));