function tableSort(){
    let table= document.getElementById('maintable');
    let [,...mrows]=Array.from(table.querySelectorAll('tr'));
    mrows.sort((a, b) => {
        const aText = a.querySelector(`.age`).textContent;
        const bText = b.querySelector(`.age`).textContent;
        return aText-bText
    })
    mrows.forEach(row=>{
        table.appendChild(row)
    })
}

let btn= document.getElementById('button');

btn.addEventListener('click',()=>{
    tableSort();
})