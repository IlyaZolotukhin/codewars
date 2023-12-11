//отсортировать массив по алфавиту, к буквам первого слова добавить***
function twoSort(s) {
    console.log(s.sort()[0].split('').map(w => w + "***").join('').slice(0, -3))
}

twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])