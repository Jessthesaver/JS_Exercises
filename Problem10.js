class Person{
    constructor(name,lastname){
        this.name=name;
        this.lastname= lastname;
    }
    getName(){
        return this.name+' '+this.lastname;
    }
    async ajaxGet(link){
        return fetch(link)
       
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
let jesus=new Person('Jesus','Carmona')
let listofdata = aby.ajaxGet('https://jsonplaceholder.typicode.com/users').then((res)=>{
    if(res.ok){
        console.log('Succesful request')
        return res
    }
    else{
        throw new Error('Unsuccesful request')
    }
}).then(res=>res.json())
    .then(data=> console.log(data))
    .catch(error=> {
        throw new Error(error)
    })