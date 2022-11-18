const foo = (function () {
        let bar= function(){
            console.log('This is a public method');
        };
        let _private= function(){
            console.log('This is a private method')
        };
        let test= function(){
            return _private();
        };
    return {bar,test};
})();
foo.bar();
foo.test();