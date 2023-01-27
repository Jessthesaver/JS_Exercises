const str = 'potato';
const pttr= 'po*ato'
function check(stra,strb){
    let spltstr=[...stra];
    let spltptr= [...strb];
    return test(spltptr,spltstr);
}
function test(arra,arrb){
    if(arra.length==arrb.length){
        for(let i=0;i<arra.length;i++){
            if(arra[i]==arrb[i] || arra[i]=='*'||arrb[i]=='*'){
            }else{
                throw new Error(`Strings aren't the same`)
            }
        }   
        return true
    }else{
        throw new Error('Strings have different length')
    }
}
console.log(check(str,pttr))