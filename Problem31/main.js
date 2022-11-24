const div= document.querySelector('div');

div.addEventListener('click',(event)=>{
    let element= event.target;
    let listofelements=div.children;
    if(element.tagName=='P'){
        if(Array.from(element.classList).includes('on')){
            element.classList.remove('on');
            Array.from(listofelements).forEach(el=>{
                el.style.visibility='visible';
            });
        }else{
            element.classList.add('on');
            Array.from(listofelements).forEach(el=>{
                if(Array.from(el.classList).includes('on')){
                    el.style.visibility='visible';
                }else{
                    el.style.visibility='hidden';
                }
            })
        }
        
    }
    
});