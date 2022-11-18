String.prototype.reverse = function(){
    let str='';
    for(let i =this.length-1; i>=0;i--){
        str += this[i];
    }
    return str;
};

String.prototype.reverseWords = function(){
    let regex=/([a-zA-Z]+)/gm;
    let matches=this.match(regex);
    let str='';
    matches.forEach(element => {
        for(let i =element.length-1; i>=0;i--){
            str += element[i];
        }
        str +=' ';   
    });
    return str;
    
};

console.log('potato fries'.reverseWords());