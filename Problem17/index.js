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

let div = document.getElementsByClassName('info')[1];
div.childNodes[1].innerText = candidate.name.firstname;
div.childNodes[3].innerText = candidate.printName();