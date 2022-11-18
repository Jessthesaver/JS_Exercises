let counter=0;
function fn(){
    console.log(counter)
    let box=document.getElementById('magicbox');
    box.style.color='yellow';
    if(counter==0){
        box.style.backgroundColor='red';
    }if(counter==1){
        box.style.backgroundColor='green';
    }if(counter==2){
        box.style.backgroundColor='blue';
    }if(counter==3){
        box.style.backgroundColor='aqua';
        counter=0;
        return
    }
    counter++
}


document.getElementById('magicbutton').addEventListener('click',()=>{
    fn()
});