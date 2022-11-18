/*var foo = "hello";
(function () { 
   var bar = "World";
   alert( foo + bar); 
})();
alert( foo + bar);
//this bunch of code first opens an alert that says helloWorld and next it shows an error because bar is undefined in the global scope
*/
/*
if( [] ) console.log("array is true"); //this logs array is true
if ([] == true) console.log("array == true");//this logs undefined because an empty array is a false statement
*/
/*
for(let i = 0; i < 5; ++i){
    setTimeout(function(){
         console.log("counter: ", i);
    }, 100);
}//this code logs a 5 and after that a list of counter: 0 thru counter: 4 
*/

var obj = {
    prop: {}
 };
 
 delete obj.prop;
 console.log(obj.prop);//this returns undefined
 