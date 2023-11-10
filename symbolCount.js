function count(string) {
    let a = string.split("");
    let obj = {};
    for(let i=0;i < a.length;i++){
        if(typeof obj[a[i]] !== 'undefined'){
            obj[a[i]] += 1;
        } else {
            obj[a[i]] = 1;
        }
    }
    return obj;
}
console.log(count('banana'));


