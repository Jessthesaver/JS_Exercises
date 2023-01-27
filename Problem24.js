function removefromarray(arr,value){
    for( let i =0;i<arr.length;i++){
        if(arr[i]==value){
            let index= arr.indexOf(value);
            arr.splice(index,1);
            return arr;
        }
    }
    return `The element isn't in the array`
}
const testarr=[1,2,3,4,5,6];
const testval=4;

console.log(removefromarray(testarr,testval));