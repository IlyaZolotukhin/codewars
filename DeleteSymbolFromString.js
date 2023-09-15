/*дана строка, из нее нужно удалить не нужный символ
*
* */
function removeExclamationMarks(s) {
    console.log(s.replace(/!/g, ""))
}

removeExclamationMarks("Hello World!")