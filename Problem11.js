const objectone={
    pro: 1,
    noob: false,
    kratos: 'cool',
    fedelobo:true
}

const objecttwo={
    pro: 1,
    noob: true,
    kratos: 'evil',
    fedelobo:true
}

function checkProperties(obj) {
    for (let key in obj) {
        if (obj[key] !== null && obj[key] != "")
            return false;
    }
    return true;
}

function objectChecker(obja,objb){
    let sameprops=[];
    for(let keya in obja){
        for(let keyb in objb){
            if(keya==keyb && obja[keya]!=objb[keyb]){
                sameprops.push(keya);
            }
        }
    }
    return sameprops;
}

console.log(objectChecker(objectone,objecttwo));