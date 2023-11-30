//из двух строк получить одну без одинаковых букв по алфавиту
function longest(s1, s2) {
    console.log([...new Set(s1+s2)].sort().join(''))

}

longest("aretheyhere", "yestheyarehere")
