//написать кастомный .some, должен вывести true если встретит первое заданное условие
function customSome(array, callback) {
    for(let i = 0; i < array.length; i ++) {
        if(callback(array[i])) return  true
    }
    return false
}

console.log(customSome([-10,-5,-3, 0, 1, 2, 3], (i) => i === -5))