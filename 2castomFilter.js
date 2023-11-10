function customFilter(array, callback) {
    let res = []
    for(let i = 0; i < array.length; i ++) {
        if(callback(array[i])){
            res.push(array[i])
        }
    }
    return res
}

console.log(customFilter([-10,-5,-3, 0, 1, 2, 3], (i) => i < 0))