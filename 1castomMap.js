function customMap(array, callback) {
    let res = []
    for(let i = 0; i < array.length; i ++) {
        res.push(callback(array[i]))
    }
    return res
}

console.log(customMap([1, 2, 3], (i) => i + 1))