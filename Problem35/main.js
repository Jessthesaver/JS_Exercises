function tableSort(){
    let table= document.getElementById('maintable');
    let switching=true;
    let switchable;
    let firstrow;
    let seconndrow;
    let rows;
    let i;

    while(switching){
        switching=false;
        rows = table.rows;
        for(i=1; i<(rows.length-1); i++){
            switchable= false;
            firstrow= rows[i].querySelector('.age');
            seconndrow= rows[i+1].querySelector('.age');
            if(firstrow.innerHTML > seconndrow.innerHTML){
                switchable= true;
                break;
            }
        }
        if(switchable){
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching=true;
        }
    }
}

let btn= document.getElementById('button');

btn.addEventListener('click',()=>{
    tableSort();
})