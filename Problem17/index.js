let candidate = {
    name: {
       firstname: 'John',
       lastname: 'Galt',
       phone: '123-456-7890'
    },
    printName: function(){
        return this.name.firstname +' '+ this.name.lastname;
    }
}

let div = document.querySelector('#body').querySelector('.info');
let [div1,div2] = div.children
div1.textContent = candidate.name.firstname;
div2.textContent = candidate.printName();