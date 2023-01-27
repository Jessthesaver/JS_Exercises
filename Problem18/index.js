// to mount the server run json-server --watch db.json
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
    cell.querySelector('.editLink').addEventListener('dblclick', (evt)=>{  
    let row= evt.target.parentNode.parentNode;
    console.log(row.parentNode)
    let firstname=row.querySelector('.firstName').querySelector('input').value;
    let lastname=row.querySelector('.lastName').querySelector('input').value;
    let phone=row.querySelector('.phone').querySelector('input').value;
    let nwcandidate= new Candidate(firstname,lastname,phone);
    uploadACandidate('http://localhost:3000/people',nwcandidate);
    evt.preventDefault()
        });
    }


async function bindEdit(cell){
    cell.querySelector('.editLink').addEventListener('dblclick', (evt)=>{
        evt.preventDefault()
    let row= evt.target.parentNode.parentNode;
    let form = document.querySelector('form')
    console.log( form)
    let firstname=row.querySelector('.firstName').querySelector('input').value;
    let lastname=row.querySelector('.lastName').querySelector('input').value;
    let phone=row.querySelector('.phone').querySelector('input').value;
    let id=row.querySelector('.id').innerHTML;
    putAcandidate('http://localhost:3000/people',{name:{firstname:firstname,lastname:lastname},id:id,phone:phone})
    evt.preventDefault()
});
}


async function bindDelete(){
    let links=document.getElementsByClassName('deleteLink');
    Array.from(links).forEach(element => {
        element.addEventListener('click', (evt)=>{
            evt.preventDefault()
            let row= evt.target.parentNode.parentNode;
            let id=row.querySelector('.id').innerHTML;
            deleteAcandidate('http://localhost:3000/people',id )
            row.parentNode.removeChild(row)
        });
    });
}

function editEnabler(cell){
    cell.querySelector('.editLink').addEventListener('click', (evt)=>{
        evt.preventDefault()
        let row= evt.target.parentNode.parentNode;
        let editable=row.querySelectorAll('input')
        editable.forEach(element =>{
            if(element.readOnly===true){
                element.readOnly=false
            }else{
                element.readOnly=true
            }
        })
});
}

function addRow(candidate){
    let table= document.getElementById('main_table');
    let input= document.createElement('input');
    input.readOnly=true
    let cloneInput= input.cloneNode(true);
    let row=table.insertRow();
    let id = row.insertCell();
    id.classList.add('id');
    id.textContent= ((candidate) ? candidate.id  :'');
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
    let editLink=document.createElement('a')
    editLink.classList.add('editLink')
    editLink.textContent='edit'
    editLink.type='submit'
    methodcell.appendChild(editLink)
    let deleteLink=document.createElement('a')
    deleteLink.classList.add('deleteLink')
    deleteLink.textContent='/delete'
    methodcell.appendChild(deleteLink)
    if(candidate){
        bindEdit(methodcell);
        editEnabler(methodcell);
    }else{
        bindCreate(methodcell);
        editEnabler(methodcell);
    }
    bindDelete();
}
//Get
async function loadCandidates(url){
    const response = await fetch(url, {
        method: 'GET',
    });
    if (!response.ok) {
        console.error(response.status, response.statusText);
        return
    };
    const data = await response.json();
    console.log(data)
    return data;
}
//Post
function uploadACandidate(url,candidate){
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
            console.error('POST request failed')
        }
        return res
    })
    .then((res)=> res.json())
    .catch((error) => console.error(error))
}
//PUT
function putAcandidate(url,candidate){
    fetch(`${url}/${candidate.id}`,{
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
            console.error('PUT request failed')
        }
        return res
    })
    .then((res)=> res.json())
    .catch((error) => console.error(error))

}
//DELETE
function deleteAcandidate(url,id){
    fetch(url+`/${id}`,{
        method:'DELETE'
    })
    .then(res=>{
        if(res.ok){
            console.log('It works!')
        }else{
            console.error('DELETE request failed')
        }
        return res
    })
}

const APIUrl='http://localhost:3000/people'
loadCandidates(APIUrl).then(data=>{
    loadcontent(data);
});
document.getElementById('addLink').addEventListener('click',()=>{
    addRow();
});
function loadcontent(data){
    if(data.length>0){
    Array.from(data).forEach(cand =>{
        addRow(cand);
    });
}

}
