//если строка заканчивается одинаково то true
function solution(str, ending){
    let lastChar1 = str.charAt(str.length - 1);
    let lastChar2 = ending.charAt(ending.length - 1);
    return lastChar1 === lastChar2;
}

console.log(solution('abcde', 'abc'))