Array.prototype.multiIndexOf = function (el) { 
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
};

const months=['January', 'February','March','April','May', 'June', 'July', 'August','September','October', 'November', 'December'];
function addNClone(string){
    let temp=string.split(' ');
    let last = temp[temp.length-1]
    let next =months[months.indexOf(last)+1 ] 
    let indexes=temp.multiIndexOf(last)
    console.log(indexes)
    indexes.forEach(element => {
        temp.splice(element+1, 0, next)
    });
    return temp.join(' ');
}

let example ='January February January February';

console.log(addNClone(example));
