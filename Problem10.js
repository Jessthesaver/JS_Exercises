class Person{
    constructor(name,lastname){
        this.name=name;
        this.lastname= lastname;
    }
    getName(){
        return this.name+' '+this.lastname;
    }
    async ajaxGet(link){
        try{
            let data = this.getName();
            let url= new URL(link);
            let header = new Headers();

            url.searchParams.append('Name:',data);
            header.append('Accept', 'application/json');

            let request = new Request(url, {
                method:'GET',
                headers: header
            });
            let response = await fetch(request);
            if(!response.ok){
                throw { status: response.status, statusText: response.statusText};
            }
            let json = await response.json();
            return json;
        }
        catch(err){
            throw new Error(`Ups, you did it again, error with status ${err}`);
        }
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