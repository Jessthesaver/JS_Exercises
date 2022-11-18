const date= new Date();

function jumpAmonth(date){
    let ndt=date;
    ndt.setMonth(date.getMonth()+1);
    return ndt;
}
console.log(date);
console.log(jumpAmonth(date));