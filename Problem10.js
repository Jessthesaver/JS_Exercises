class Person{
    constructor(name,lastname){
        this.name=name;
        this.lastname= lastname;
    }
    getName(){
        return this.name+' '+this.lastname;
    }
    async ajaxGet(link){
        const response = fetch(link)
        if (!response.ok) {
            console.log(response.status, response.statusText);
        };
        const data = await response.json();
        console.log(data)
        return data;
    }
}

class Medic extends Person{
    constructor(name,lastname,specialty){
        super(name,lastname);
        this.specialty=specialty;
    }
    getDescription(){
        return this.name+' '+this.lastname+','+this.specialty;
    }
}

let aby=new Medic('Aby', 'Diaz','Ginecologist')
let jesus;
//console.log(aby);
let listofdata = aby.ajaxGet('https://jsonplaceholder.typicode.com/users')