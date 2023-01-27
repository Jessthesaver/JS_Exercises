function func1() { return { prop:"foo"}; }
function func2() { return { prop:'foo'}; }

//To my understanding, there is no difference between both codes, except for the use of 
//double quotes against single quotes. As far as I understand both work basically the same, and the 
//ones that mean a great difference are the backticks for the support of "templates" and line breaks
console.log(func1===func2)
//After testing both outputs, they are different, this because equality for objects works a little different than for other primitives