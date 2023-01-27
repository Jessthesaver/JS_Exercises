const div= document.querySelector('div');
const togglers= document.querySelectorAll('.toggler')
let ps=[]
togglers.forEach(element=>{
    element.nextElementSibling.style.visibility='hidden'
})

togglers.forEach(element=>{
    element.addEventListener('click',(event)=>{
        let target= event.target;
        let sibbling = target.nextElementSibling;
        if(sibbling.style.visibility==='visible'){
            sibbling.style.visibility='hidden';
        }else{
            sibbling.style.visibility='visible';
        }
    });
});