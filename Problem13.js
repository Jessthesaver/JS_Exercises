Date.prototype.tomorrowDate= function(){
    let today= new Date(this.valueOf());
    today.setDate(this.getDate()+1);
    return today;
}

const date= new Date();
const tomorrow = date.tomorrowDate();
console.log(date);
console.log(tomorrow)