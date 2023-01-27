const arr=[3,2,1,0,-3,2,2,-2];

// function combinator(array){
//     let out=[];
//     for(let i =0;i<array.length;i++){
//         for(let j=i+1;j<array.length;j++){
//             for(let k=j+1;k<array.length;k++){
//                 if(array[i]+array[j]+array[k]===0 && i!=j && i!=k && j!=k){
//                     let combination=[array[i],array[j],array[k]]
//                     if(!out.includes(combination)){
//                         out.push(combination);
//                     }
//                 }
//             }
//         }
//     }
//     return out;
// }

// Javascript program to find triplets in a given
// array whose sum is zero
 
// function to print triplets with 0 sum
function combinator(arr, n){
    let found = false;
    let output=[]
    arr.sort((a, b) => a - b);
 
    for (let i=0; i<n-1; i++){
        // initialize left and right
        let l = i + 1;
        let r = n - 1;
        let x = arr[i];
        while (l < r){
            if (x + arr[l] + arr[r] == 0){
                // print elements if it's sum is zero
                let combination=[x,arr[l],arr[r]]
                   if(!output.includes(combination)){
                         output.push(combination);
                     }
                l++;
                r--;
                found = true;
            }
            // If sum of three elements is less
            // than zero then increment in left
            else if (x + arr[l] + arr[r] < 0){
                l++;
            }     
            // if sum is greater than zero then
            // decrement in right side
            else{
                r--;
            }       
        }
    }
 
    if (found == false){
        console.error(" No Triplet Found" );
    }
    return output   
}


console.log(combinator(arr, arr.length));