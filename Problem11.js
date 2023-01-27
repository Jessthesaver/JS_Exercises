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

function objectChecker(obja,objb){
    const keysa =Object.keys(obja);
    const keysb =Object.keys(objb);
    const intersection = keysa.filter(element => keysb.includes(element));
    let diff = []
    intersection.forEach(element =>{
        if(obja[element]!==objb[element]){
            diff.push(element)
        }
    })
    return diff;
}

console.log(objectChecker(objectone,objecttwo));