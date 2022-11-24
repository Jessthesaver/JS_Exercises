function myLog() {
   return {
      bar: 'bar',
      foo: 'foo',
      prop: function () {
          var self = this;
          console.log(self.bar);
          console.log(this.foo);
          (function() {
             console.log(self.bar);
             console.log(this.foo);
          })();
      }
   };
}

var obj = myLog();
obj.prop();

//the myLog() function is returning an object that contains two properties and one method
//the properties are just strings that can be called easily
//in the method prop we have a more interesting behavior, first is defined a variable called self to have a reference to the object instance using the keyword this
//using that defined self and the this keyword the properties are called and printed correctly, but after that there is a function defined and called immediatly
//inside that function again there are called the same two console logs, but in this enclosure the this keyword isn't pointing to the object, so the console.log
//call shows undefined but the console log call refering to the variable self will correctly target the object and get the expected message