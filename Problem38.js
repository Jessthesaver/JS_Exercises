class Digimon {
    constructor(type,name){
        this.name=name;
        this.level='rookie';
        this.hp=Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        this.type= type;
        this.attack=Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        this.defense=Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        this.tiredness=0
    }

    train(stat){
        if(this.tiredness<60){
            this[stat]+=10;
            this.tiredness+=Math.floor(
                Math.random() * (10 - 5) + 5
              )
        }else if(this.tiredness>60 && this.tiredness<80){
            this[stat]+=5;
            this.tiredness+=Math.floor(
                Math.random() * (10 - 5) + 5
              )
        }else  if(this.tiredness>80 && this.tiredness<100){
            this[stat]+=3;
            this.tiredness+=Math.floor(
                Math.random() * (10 - 5) + 5
              )
        }else{
            console.error('The digimon is to tired to train!!')
        }
        return
    }
    
    evolution(name){
        this.name=name;
        let stats = ['hp','attack','defense']
        
        this.tiredness=0
        if(this.level==='rookie'){
            this.level='champion';
            stats.forEach(element => {
                this[element]+=Math.floor(Math.random() * (100 - 10 + 1)) + 50;
            });
        }else if(this.level==='champion'){
            this.level='ultimate'
            stats.forEach(element => {
                this[element]+=Math.floor(Math.random() * (100 - 10 + 1)) + 200;
            });
        }else{
            console.error('The digimon can not digivolve further')
        }
    }
}

class Champion extends Digimon{
    constructor(type,name){
        super(type,name)
        this.level='champion'
        this.hp+=Math.floor(Math.random() * (200 - 100 + 1)) + 100;
        this.attack+=Math.floor(Math.random() * (200 - 100 + 1)) + 100;
        this.defense+=Math.floor(Math.random() * (200 - 100 + 1)) + 100;
    }
}

class Ultimate extends Champion{
    constructor(type,name){
        super(type,name)
        this.hp+=Math.floor(Math.random() * (300 - 200 + 1)) + 100;
        this.attack+=Math.floor(Math.random() * (300 - 200 + 1)) + 100;
        this.defense+=Math.floor(Math.random() * (300 - 200 + 1)) + 100;
    }

}
//this class creates a digimon with random stats just defining its name and type, digimons can only be data, vaccine, virus or free. 
//The type of the digimon is validated during the battle.

function strike(digi1,digi2){
    let damage1, damage2;
    if((digi1.type=='data' && digi2.type=='vaccine') || (digi1.type=='vaccine' && digi2.type=='virus') || (digi1.type=='virus' && digi2.type=='data')){
        damage1=Math.floor((10*digi1.attack*1.5*Math.random())/digi2.defense);
        damage2=Math.floor((10*digi2.attack*Math.random())/digi1.defense*1.5);
        console.log(`${digi1.name} deal ${damage1} damage to ${digi2.name}
        ${digi2.name} deal ${damage2} damage to ${digi1.name}`)
        digi1.hp=digi1.hp -damage2;
        digi2.hp= digi2.hp -damage1;
    }else if((digi1.type=='data' && digi2.type=='virus') || (digi1.type=='vaccine' && digi2.type=='data') || (digi1.type=='virus' && digi2.type=='vaccine')){
        damage1=Math.floor((10*digi1.attack*Math.random())/digi2.defense*1.5);
        damage2=Math.floor((10*digi2.attack*1.5*Math.random())/digi1.defense);
        console.log(`${digi1.name} deal ${damage1} damage to ${digi2.name}
        ${digi2.name} deal ${damage2} damage to ${digi1.name}`)
        digi1.hp=digi1.hp -damage2;
        digi2.hp= digi2.hp -damage1;
    }else if((digi1.type==digi2.type) || digi1.type=='free' ||digi2.type=='free'){
        damage1=Math.floor((10*digi1.attack*Math.random())/digi2.defense);
        damage2=Math.floor((10*digi2.attack*Math.random())/digi1.defense);
        console.log(`${digi1.name} deal ${damage1} damage to ${digi2.name}
        ${digi2.name} deal ${damage2} damage to ${digi1.name}`)
        digi1.hp=digi1.hp -damage2;
        digi2.hp= digi2.hp -damage1;
    }else{
        throw new Error('There are a least an invalid digimon type. Valid types are data, vaccine, virus and free')
    }
}
//the above section is the logic for each digimon strike to each other, as this is a battle simulator.
//the number to generate each strike has a little randomnes to give each digimon a chance of winning.
//also the logic for the battle follows the type advantages shown in the cartoon and videogames: data beats vaccine, vaccine beats virus and virus beats data.

function battle(digi1,digi2){
    while(digi1.hp>0 && digi2.hp>0){
        strike(digi1,digi2);
    }
    if(digi1.hp>0){
        return `The winner is ${digi1.name}!`
    }else if(digi2.hp>0){
        return `The winner is ${digi2.name}!`
    }else{
        return `The digimons tied!`
    }
}
//this last section handles the complete battle, it will generate strikes until one digimon gets to negative hp and returns a winner, if both digimon go below
//0 hp in the same strike it will return a tie


let agumon = new Digimon('vaccine', 'Agumon');
let gabumon = new Digimon('data','Gabumon');
let metalgreymon = new Ultimate('vaccine', 'MetalGreymon')
let veemon= new Digimon('free','Veemon')
agumon.train('attack')
agumon.evolution('Greymon')
agumon.train('attack')
agumon.evolution('metalGreymon')
veemon.evolution('exveemon')
veemon.train('defense')
veemon.evolution('paildramon')


console.log(battle(agumon,veemon));