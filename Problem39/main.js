function validator(input){
    let pattern= input.slice(0,3);
    for(let i =3; i< input.length; i++){
        pattern= pattern.slice(1)+input.charAt(i);
        totalKeyboard.forEach(floor=>{
            if(floor.includes(pattern)){
                return true
            }
        })
    }
    return false;
}

const keyboard= '1234567890qwertyuiopasdfghjklñzxcvbnm'
const reversekeyboard ='0987654321poiuytrewqñlkjhgfdsamnbvcxz'
const result=document.querySelector('#results')
const [...keyboardfloors]=[keyboard.slice(0,10),keyboard.slice(10,20),keyboard.slice(20,30),keyboard.slice(30)]
const [...reversekeyboardfloors]=[reversekeyboard.slice(0,10),reversekeyboard.slice(10,20),reversekeyboard.slice(20,30),reversekeyboard.slice(30)]
const totalKeyboard=keyboardfloors.concat(reversekeyboardfloors)
const inp = document.querySelector('#txtinp');
inp.addEventListener('input',(event)=>{
    result.textContent='';
    const string = event.target.value.toLowerCase();
    const validation = validator(string);
    if(string.length <4 || validation){
        result.textContent='Valid input!';
    }else if(validation!=true){
        result.textContent='Invalid input! Try again'
    }
});