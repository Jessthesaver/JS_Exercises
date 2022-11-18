function foo1(){
    var fn = function(){
       console.log(this.foo);
    };
    return { foo:'bar' };
}
  
function foo2(){ 
    var fn = function(){
        console.log(this.foo); 
    };
    return { foo:'baz' };
}
 
console.log(foo1());
console.log(foo2()); 
/*this code defines a function inside another function and returns an object
the returned object just has a property called foo with a string value of bar in the first case
and baz in the second.
the function fn defined inside both foo1 and foo2 isn't called in any other part of the code, and because
of the var definition the function is only defined inside the foo scope then isn't probable that the function
can be accessed.*/