//[]+[]
//{}+[]
//[]+{}
//{}+{}

let a = [] + [];
console.log(typeof(a));

/*The result of this operations is in every case an string,
the content of the string is diferent for any case. the [] object generates an
empty string and the {} object generates an string composed of [object Object]
this leaves the results as follows*/
//[]+[]
//{}+[] [object Object]
//[]+{} [object Object]
//{}+{} [object Object][object Object]