function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}
function fn(){
    let box=document.getElementById('magicbox');
    box.style.backgroundColor=generateRandomColor();

}


document.getElementById('magicbutton').addEventListener('click',()=>{
    fn()
});