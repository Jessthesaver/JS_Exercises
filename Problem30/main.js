const div= document.querySelector('div');

div.addEventListener('click',(event)=>{
    if(event.target.className=='toggler'){
        let elementvisibility= event.target.nextElementSibling.style.visibility;
        let adjactenel= event.target.nextElementSibling;
    
        if(elementvisibility!=true || elementvisibility ==='hidden'){
            adjactenel.style.visibility= 'visible';
        }if(elementvisibility=='visible'){
            adjactenel.style.visibility='hidden';
        }
    }  
})