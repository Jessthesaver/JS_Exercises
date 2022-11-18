const months=['January', 'February','March','April','May', 'June', 'July', 'August','September','October', 'November', 'December'];
function addNClone(array){
    let temp=array;
    if(array.includes(...months)){
        temp.push(months[array.length]);
        let length=temp.length;
        for(let i =0 ; i < length ; i++){
            temp.push(temp[i]);
    }
    return temp;
    }
}

let example =['January','February'];

console.log(addNClone(example));
