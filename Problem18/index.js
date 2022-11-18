class Candidate{
    constructor(name,lastname,phone){
        this.name={};
        this.name.firstname = name;
        this.name.lastname = lastname;
        this.phone = phone;
        this.id=new Date().toISOString();
    }
}

async function bindCreate(cell){
    console.log(cell.children)
    cell.querySelector('.editLink').addEventListener('click', (evt)=>{
    let row= evt.target.parentNode.parentNode;
    let firstname=row.querySelector('.firstName').querySelector('input').value;
    let lastname=row.querySelector('.lastName').querySelector('input').value;
    let phone=row.querySelector('.phone').querySelector('input').value;
    let nwcandidate= new Candidate(firstname,lastname,phone);
    uploadACandidate('http://localhost:3000/people',nwcandidate);
        });
    }


async function bindEdit(cell){
    cell.querySelector('.editLink').addEventListener('click', (evt)=>{
    let row= evt.target.parentNode.parentNode;
    let firstname=row.querySelector('.firstName').querySelector('input').value;
    let lastname=row.querySelector('.lastName').querySelector('input').value;
    let phone=row.querySelector('.phone').querySelector('input').value;
    let id=row.querySelector('.id').innerHTML;
    putAcandidate('http://localhost:3000/people',{name:{firstname:firstname,lastname:lastname},id:id,phone:phone})});
}


async function bindDelete(){
    let links=document.getElementsByClassName('deleteLink');
    Array.from(links).forEach(element => {
        element.addEventListener('click', (evt)=>{
            let row= evt.target.parentNode.parentNode;
            let id=row.querySelector('.id').innerHTML;
            console.log(id)

            deleteAcandidate('http://localhost:3000/people',id )
            row.parentNode.removeChild(row)
        });
    });
}

function addRow(candidate){
    let table= document.getElementById('main_table');
    let input= document.createElement('input');
    let cloneInput= input.cloneNode(true);
    let row=table.insertRow();
    let id = row.insertCell();
    id.classList.add('id');
    id.innerHTML= ((candidate) ? candidate.id  :'');
    let name = row.insertCell();
    name.classList.add('firstName');
    cloneInput.value=((candidate) ? candidate.name.firstname  :'');
    name.appendChild(cloneInput)
    let lstname = row.insertCell();
    lstname.classList.add('lastName')
    cloneInput= input.cloneNode(true);
    cloneInput.value=candidate ? candidate.name.lastname  :'';
    lstname.appendChild(cloneInput)
    let phone = row.insertCell();
    phone.classList.add('phone')
    cloneInput= input.cloneNode(true);
    cloneInput.value=candidate? candidate.phone: '';
    phone.appendChild(cloneInput)
    let methodcell= row.insertCell();
    methodcell.innerHTML=`<a class='editLink'>edit</a>/<a class='deleteLink'>delete</a>`
    if(candidate){
        bindEdit(methodcell);
    }else{
        bindCreate(methodcell);
    }
    bindDelete();
}
//Get
async function loadCandidates(url){
    const response = await fetch(url, {
        method: 'GET',
    });
    if (!response.ok) {
        console.log(response.status, response.statusText);
    };
    const data = await response.json();
    console.log(data)
    return data;
}
//Post
async function uploadACandidate(url,candidate){
    fetch(url,{
        method:'POST',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(candidate)
    })
    .then(res=>{
        if(res.ok){
            console.log('It works!')
        }else{
            console.log('POST request failed')
        }
        return res
    })
    .then((res)=> res.json())
    .catch((error) => console.log(error))
}
//PUT
async function putAcandidate(url,candidate){
    fetch(url+`/${candidate.id}`,{
        method:'PUT',
        headers:{
            'Content-type': 'application/json',
        },
        body: JSON.stringify(candidate)
    })
    .then(res=>{
        if(res.ok){
            console.log('It works!')
        }else{
            console.log('PUT request failed')
        }
        return res
    })
    .then((res)=> res.json())
    .catch((error) => console.log(error))

}
//DELETE
async function deleteAcandidate(url,id){
    fetch(url+`/${id}`,{
        method:'DELETE'
    })
    .then(res=>{
        if(res.ok){
            console.log('It works!')
        }else{
            console.log('DELETE request failed')
        }
        return res
    })
}

loadCandidates('http://localhost:3000/people').then(data=>{
    loadcontent(data);
});
document.getElementById('addLink').addEventListener('click',()=>{
    addRow();
});
async function loadcontent(data){
    if(data.length>0){
    Array.from(data).forEach(cand =>{
        addRow(cand);
    });
}

}
